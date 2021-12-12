package middleware

import (
	"github.com/gofiber/fiber/v2"
	jwtware "github.com/gofiber/jwt/v2"
	"github.com/heroku/alaqsha/pkg/config"
)

// Protected protect routes jwt HS256
// Currently set SECRET=c3l1a3JpLnN1d2FuZGhhQGdtYWlsLmNvbQ==
// From base 64 encode of my email syukri.suwandha@gmail.com
// Set to diffrent key for production
func Protected() fiber.Handler {
	return jwtware.New(jwtware.Config{
		SigningKey:    []byte(config.Config("SECRET")),
		ErrorHandler:  jwtError,
		SigningMethod: "HS512",
	})
}

func jwtError(c *fiber.Ctx, err error) error {
	if err.Error() == "Missing or malformed JWT" {
		return c.Status(fiber.StatusBadRequest).
			JSON(fiber.Map{"status": "error", "message": "Missing or malformed JWT", "data": nil})
	}
	return c.Status(fiber.StatusUnauthorized).
		JSON(fiber.Map{"status": "error", "message": "Invalid or expired JWT", "data": nil})
}
