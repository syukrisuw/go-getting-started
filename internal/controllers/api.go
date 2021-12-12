package controllers

import (
	"fmt"
	"log"
	"math/rand"

	"github.com/gofiber/fiber/v2"
	"github.com/heroku/wanthatgows/internal/database"
	"github.com/heroku/wanthatgows/internal/models"
)

// Hello hanlde api status
func Hello(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{"status": "success", "message": "Hello i'm ok!", "data": nil})
}

func TestDB(c *fiber.Ctx) error {
	var user models.User

	var randSuffix string
	randSuffix = randStringRunes(3)

	tmpUserName := fmt.Sprintf("UserName_%s", randSuffix)
	tmpPassword := fmt.Sprintf("PassWord_%s", randSuffix)

	user = models.User{UserName: tmpUserName, Password: tmpPassword, UserTypeId: 2}
	wtdb := database.WtGormDB
	result := wtdb.Create(&user)

	if result.Error != nil {
		log.Fatal(result.Error.Error())
	}

	responseBody := "test from /db"

	return c.JSON(fiber.Map{"status": "success", "message": responseBody, "data": nil})
}

func randStringRunes(n int) string {
	letterRunes := []rune("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")

	b := make([]rune, n)
	for i := range b {
		b[i] = letterRunes[rand.Intn(len(letterRunes))]
	}
	return string(b)
}
