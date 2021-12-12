package controllers

import (
	"fmt"
	"strconv"

	"github.com/heroku/wanthatgows/internal/database"
	"github.com/heroku/wanthatgows/internal/models"

	"github.com/dgrijalva/jwt-go"
	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

func hashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(bytes), err
}

func validToken(t *jwt.Token, id string) bool {
	n, err := strconv.Atoi(id)
	if err != nil {
		return false
	}

	claims := t.Claims.(jwt.MapClaims)
	uid := int(claims["user_id"].(float64))

	if uid != n {
		return false
	}

	return true
}

func validUser(id string, p string) bool {
	db := database.WtGormDB
	var user models.User
	db.First(&user, id)
	if user.UserName == "" {
		return false
	}
	if !CheckPasswordHash(p, user.Password) {
		return false
	}
	return true
}

// GetUser get a user
func GetUser(c *fiber.Ctx) error {
	id := c.Params("id")
	db := database.WtGormDB
	var user models.User
	db.Find(&user, id)
	if user.UserName == "" {
		return c.Status(404).JSON(fiber.Map{"status": "error", "message": "No user found with ID", "data": nil})
	}
	return c.JSON(fiber.Map{"status": "success", "message": "Product found", "data": user})
}

// GetUserType get a usertype

func GetUserType(c *fiber.Ctx) error {
	id := c.Params("id")
	db := database.WtGormDB
	var userType models.UserType
	db.Find(&userType, id)
	if userType.UserTypeName == "" {
		return c.Status(404).JSON(fiber.Map{"status": "error", "message": "No UserType found with ID", "data": nil})
	}
	return c.JSON(fiber.Map{"status": "success", "message": "Product found", "data": userType})
}

// CreateUser new user
func CreateUser(c *fiber.Ctx) error {
	type RespUserData struct {
		Username string `json:"username"`
		Email    string `json:"email"`
	}

	db := database.WtGormDB
	user := new(models.User)
	if err := c.BodyParser(user); err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "error", "message": "Review your input", "data": err})

	}

	hash, err := hashPassword(user.Password)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "error", "message": "Couldn't hash password", "data": err})

	}

	user.Password = hash
	//default new user will be assigned to usertypeid 999
	user.UserTypeId = 999
	if err := db.Create(&user).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "error", "message": "Couldn't create user", "data": err})
	}

	respUserData := RespUserData{
		Email:    user.Email,
		Username: user.UserName,
	}

	return c.JSON(fiber.Map{"status": "success", "message": "Created user", "data": respUserData})
}

// CreateUser new user type
func CreateUserType(c *fiber.Ctx) error {
	type RespUserTypeData struct {
		ID           uint   `json:"userTypeId"`
		UserTypeName string `gorm:"uniqueIndex;not null" json:"userTypeName"`
		UserTypeDesc string `json:"userTypeDesc"`
		EventGroupId uint   `json:"eventGroupId"`
	}

	db := database.WtGormDB
	userType := new(models.UserType)
	if err := c.BodyParser(userType); err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "error", "message": "Review your UserType input", "data": err})

	}
	if err := db.Create(&userType).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "error", "message": "Couldn't create UserType", "data": err})
	}

	respUserTypeData := RespUserTypeData{
		ID:           userType.ID,
		UserTypeName: userType.UserTypeName,
		UserTypeDesc: userType.UserTypeDesc,
		EventGroupId: userType.EventGroupId,
	}

	return c.JSON(fiber.Map{"status": "success", "message": "Created user", "data": respUserTypeData})
}

// UpdateUser for user to update their detail data
func UpdateUser(c *fiber.Ctx) error {
	type UpdateUserInput struct {
		FirstName  string `json:"firstName"`
		LastName   string `json:"lastName"`
		UserTypeId uint   `json:"userTypeId"`
	}
	var uui UpdateUserInput
	if err := c.BodyParser(&uui); err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "error", "message": "Review your input", "data": err})
	}
	id := c.Params("id")
	token := c.Locals("user").(*jwt.Token)

	//validation against their token
	if !validToken(token, id) {
		return c.Status(500).JSON(fiber.Map{"status": "error", "message": "Invalid token id", "data": nil})
	}

	db := database.WtGormDB
	var user models.User

	db.First(&user, id)
	user.FirstName = uui.FirstName
	user.LastName = uui.LastName
	db.Save(&user)

	return c.JSON(fiber.Map{"status": "success", "message": "User successfully updated", "data": user})
}

// UpdateUser for user to update their detail data
func UpdateUserByAdmin(c *fiber.Ctx) error {
	type UpdateUserInput struct {
		UserName   string `json:"userName"`
		Email      string `json:"email"`
		Password   string `json:"password"`
		FirstName  string `json:"firstName"`
		LastName   string `json:"lastName"`
		UserTypeId uint   `json:"userTypeId"`
	}
	var uui UpdateUserInput
	if err := c.BodyParser(&uui); err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "error", "message": "Review your input", "data": err})
	}
	id := c.Params("id")
	token := c.Locals("user").(*jwt.Token)

	//validation against their token
	if !validToken(token, id) {
		return c.Status(500).JSON(fiber.Map{"status": "error", "message": "Invalid token id", "data": nil})
	}

	db := database.WtGormDB
	var user models.User

	db.First(&user, id)
	user.FirstName = uui.FirstName
	user.LastName = uui.LastName
	user.UserTypeId = uui.UserTypeId
	db.Save(&user)

	return c.JSON(fiber.Map{"status": "success", "message": "User successfully updated", "data": user})
}

// DeleteUser delete user
// Only can be done by admin, and admin must login first to get jwt
func DeleteUser(c *fiber.Ctx) error {
	type DeleteInputModel struct {
		UserNameToDelete string `json:"usernameToDelete"`
		AdminPassword    string `json:"adminPassword"`
	}
	var deleteInputModel DeleteInputModel
	if err := c.BodyParser(&deleteInputModel); err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "error", "message": "Review your input", "data": err})
	}

	id := c.Params("id")
	// token := c.Locals("user").(*jwt.Token)

	// if !validToken(token, id) {
	// 	return c.Status(500).JSON(fiber.Map{"status": "error", "message": "Invalid admin token id", "data": nil})

	// }

	if !validUser("1", deleteInputModel.AdminPassword) {
		return c.Status(500).JSON(fiber.Map{"status": "error", "message": "Not valid administrator password", "data": nil})
	}

	db := database.WtGormDB
	var user models.User

	db.First(&user, id)
	userNameToDelete := user.UserName
	db.Delete(&user)
	deleteMessage := fmt.Sprintf("User %s successfully deleted", userNameToDelete)
	return c.JSON(fiber.Map{"status": "success", "message": deleteMessage, "data": nil})
}
