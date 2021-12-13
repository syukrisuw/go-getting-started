package controllers

import (
	b64 "encoding/base64"
	"fmt"
	"log"
	"time"

	"gorm.io/gorm"

	"github.com/dgrijalva/jwt-go"
	"github.com/heroku/alaqsha/internal/database"
	"github.com/heroku/alaqsha/internal/middleware"
	"github.com/heroku/alaqsha/internal/models"

	"github.com/gofiber/fiber/v2"
	"github.com/heroku/alaqsha/pkg/config"
	"golang.org/x/crypto/bcrypt"
)

func ValidateWsKey(userId uint, userWsKey string) bool {

	wtSocketCacheKey := fmt.Sprint(config.GetWsKeyHeader(), string(userId))
	cachedUserWsKey := middleware.GetValueForKey(wtSocketCacheKey)
	fmt.Println("input userWsKey: ", userWsKey)
	fmt.Println("cachedUserWsKey 2: ", cachedUserWsKey)
	fmt.Println("valid: ", cachedUserWsKey == userWsKey)

	return cachedUserWsKey == userWsKey
}

// CheckPasswordHash compare password with hash
func CheckPasswordHash(password, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil
}

func getUserByEmail(e string) (*models.User, error) {
	db := database.WtGormDB
	var user models.User
	if err := db.Where(&models.User{Email: e}).Find(&user).Error; err != nil {
		if err.Error() == gorm.ErrRecordNotFound.Error() {
			return nil, nil
		}
		return nil, err
	}
	return &user, nil
}

func getUserByUsername(u string) (*models.User, error) {
	db := database.WtGormDB
	var user models.User
	if err := db.Where(&models.User{UserName: u}).Find(&user).Error; err != nil {
		if err.Error() == gorm.ErrRecordNotFound.Error() {
			return nil, nil
		}
		return nil, err
	}
	return &user, nil
}

// Login get user and password
func Login(c *fiber.Ctx) error {
	type LoginInput struct {
		Identity string `json:"identity"`
		Password string `json:"password"`
	}
	type UserData struct {
		ID       uint   `json:"id"`
		Username string `json:"username"`
		Email    string `json:"email"`
		Password string `json:"password"`
	}
	var input LoginInput
	var ud UserData

	if err := c.BodyParser(&input); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"status": "error", "message": "Error on login request", "data": err})
	}
	identity := input.Identity
	pass := input.Password

	email, err := getUserByEmail(identity)
	if err != nil {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"status": "error", "message": "Error on email", "data": err})
	}

	user, err := getUserByUsername(identity)
	if err != nil {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"status": "error", "message": "Error on username", "data": err})
	}

	if email == nil && user == nil {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"status": "error", "message": "User not found", "data": err})
	}

	var userTypeId uint

	if email == nil {
		ud = UserData{
			ID:       user.ID,
			Username: user.UserName,
			Email:    user.Email,
			Password: user.Password,
		}
		userTypeId = user.UserTypeId
	} else {
		ud = UserData{
			ID:       email.ID,
			Username: email.UserName,
			Email:    email.Email,
			Password: email.Password,
		}
		userTypeId = email.UserTypeId
	}

	if !CheckPasswordHash(pass, ud.Password) {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"status": "error", "message": "Invalid password", "data": nil})
	}

	//token := jwt.New(jwt.SigningMethodHS256)
	token := jwt.New(jwt.SigningMethodHS512)

	claims := token.Claims.(jwt.MapClaims)
	claims["username"] = ud.Username
	claims["user_id"] = ud.ID
	claims["exp"] = time.Now().Add(time.Hour * 72).Unix()

	t, err := token.SignedString([]byte(config.GetSecretKey()))
	if err != nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}

	//generate for websocket key
	userWsKey := middleware.GenerateKey(ud.Username, config.GetSecretKey())
	userWsKeyBase64 := b64.StdEncoding.EncodeToString(userWsKey)
	//save to cache for validation during using websocket
	wtSocketCacheKey := fmt.Sprint(config.GetWsKeyHeader(), string(ud.ID))
	log.Print("saving wtSocketCacheKey: ", wtSocketCacheKey, " with value: ", userWsKeyBase64)
	middleware.SetValueForKey(wtSocketCacheKey, string(userWsKeyBase64))

	return c.JSON(fiber.Map{"status": "success", "message": "Success login", "data": t, "userId": ud.ID, "userTypeId": userTypeId, "userWsKey": string(userWsKeyBase64)})
}
