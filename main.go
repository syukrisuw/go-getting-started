package main

import (
	"log"
	"os"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/limiter"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/websocket/v2"
	"github.com/heroku/alaqsha/internal/database"
	"github.com/heroku/alaqsha/internal/middleware"
	"github.com/heroku/alaqsha/internal/router"
	_ "github.com/heroku/x/hmetrics/onload"
)

const (
	rtcpPLIInterval = time.Second * 3
)

// Sdp represent session description protocol describe media communication sessions
type Sdp struct {
	Sdp string
}

func main() {

	//server setup
	app := fiber.New()
	port := os.Getenv("PORT")
	database.ConnectDB()
	app.Use(cors.New())

	// currentTime := time.Now()
	// layout := "20060102"
	// formattedDate := currentTime.Format(layout)
	// //layout := "20060102"
	// //formattedDate, _ := time.Parse(layout, currentTime)
	// //currentYear := currentTime.Year()
	// //currentMonth := currentTime.Month()
	// //currentDay := currentTime.Day()
	// currentHour := currentTime.Hour()
	// logFilenamePrefix := fmt.Sprintf("%s%d.alaqsha.log", formattedDate, currentHour)
	// logPath := "./logs/"
	// fullLogFileName := fmt.Sprintf("%s%s", logPath, logFilenamePrefix)
	logFile, err := os.OpenFile(router.GetDefaultLogFileName(), os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)
	if err != nil {
		log.Fatalf("error opening file: %v", err)
	}
	defer logFile.Close()

	app.Use(logger.New(logger.Config{
		Format: "[${ip}]:${port} ${status} - ${method} ${path} \n",
		Output: logFile,
	}))

	//use limiter connection expired in 1 minutes
	//use limiter max request between 1 minutes is only 20 connection request
	app.Use(limiter.New(limiter.Config{
		Expiration: 1,
		Max:        120,
	}))

	app.Use("/ws", func(c *fiber.Ctx) error {
		print(string(c.Request().RequestURI()))
		// IsWebSocketUpgrade returns true if the client
		// requested upgrade to the WebSocket protocol.
		if websocket.IsWebSocketUpgrade(c) {
			c.Locals("allowed", true)
			//follow up next routing
			return c.Next()
		}
		return fiber.ErrUpgradeRequired
	})

	//filter path /secure can only be accessed by authorized jwt token request
	app.Use("/secured", middleware.Protected(), func(c *fiber.Ctx) error {
		// IsWebSocketUpgrade returns true if the client
		// requested upgrade to the WebSocket protocol.
		log.Print(c.Get("Authorization"))
		//go to next url path
		return c.Next()
	})

	//direct webservice request
	app.Use("/secured/wss", func(c *fiber.Ctx) error {
		// IsWebSocketUpgrade returns true if the client
		// requested upgrade to the WebSocket protocol.
		if websocket.IsWebSocketUpgrade(c) {
			c.Locals("allowed", true)
			return c.Next()
		}
		return fiber.ErrUpgradeRequired
	})

	//administration purpose
	app.Use("/secured/admin/services/wss", func(c *fiber.Ctx) error {
		// IsWebSocketUpgrade returns true if the client
		// requested upgrade to the WebSocket protocol.
		if websocket.IsWebSocketUpgrade(c) {
			c.Locals("allowed", true)
			return c.Next()
		}
		return fiber.ErrUpgradeRequired
	})

	if port == "" {
		log.Fatal("$PORT must be set")
	}

	router.SetupRoutes(app)

	app.Listen(":" + port)

	//defer app.Shutdown()
}
