package middleware

import (
	"fmt"
	"log"
	"os"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

func Wtlogger() fiber.Handler {
	currentTime := time.Now()
	currentYear := currentTime.Year()
	currentMonth := currentTime.Month()
	currentDay := currentTime.Day()
	currentHour := currentTime.Hour()
	logFilenamePrefix := fmt.Sprintf("%d%d%d%d.alaqsha.log", currentYear, currentMonth, currentDay, currentHour)
	logPath := "./logs/"
	fullLogFileName := fmt.Sprintf("%s%s", logPath, logFilenamePrefix)
	logFile, err := os.OpenFile(fullLogFileName, os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)
	if err != nil {
		log.Fatalf("error opening file: %v", err)
	}
	defer logFile.Close()

	return logger.New(logger.Config{
		Format: "[${ip}]:${port} ${status} - ${method} ${path}\n",
		Output: logFile,
	})

}
