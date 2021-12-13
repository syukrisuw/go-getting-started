package router

import (
	"fmt"
	"log"
	"os"
	"strconv"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/websocket/v2"
	"github.com/heroku/alaqsha/internal/controllers"
	"github.com/heroku/alaqsha/internal/middleware"
	gubrak "github.com/novalagung/gubrak/v2"
)

type M map[string]interface{}

const MESSAGE_NEW_USER = "New User"
const MESSAGE_CHAT = "Chat"
const MESSAGE_LEAVE = "Leave"

var connections = make([]*WebSocketConnection, 0)

//map for fast validation userid and secret
var keyStore = map[uint]string{}

type SocketPayload struct {
	Message string
}

type SocketResponse struct {
	From    string
	Type    string
	Message string
}

type WsKey struct {
	UserId uint
	RawKey string
}

type WebSocketConnection struct {
	*websocket.Conn
	UserName string
	UserId   uint
}

func GetKeyStore(userId uint) string {
	return keyStore[userId]
}

func AddKey(userId uint, newKey string) {
	keyStore[userId] = newKey
}

func broadcastMessage(currentConn *WebSocketConnection, kind, message string) {
	if kind == MESSAGE_LEAVE {
		message = fmt.Sprintf("user %s %s", currentConn.UserName, message)
	}

	for _, eachConn := range connections {
		if eachConn == currentConn {
			continue
		}

		eachConn.WriteJSON(SocketResponse{
			From:    currentConn.UserName,
			Type:    kind,
			Message: message,
		})
	}
}

func ejectConnection(currentConn *WebSocketConnection) {
	filtered := gubrak.From(connections).Reject(func(each *WebSocketConnection) bool {
		return each == currentConn
	}).Result()
	connections = filtered.([]*WebSocketConnection)
}

// SetupRoutes setup router api
func SetupRoutes(app *fiber.App) {
	//Static file deployed in /app/web/static in heroku or ../web/static in local
	//app.Static("/", "/app/web/static") //For Heroku
	app.Static("/", "./web/static") //For Localhost
	//WsMessageService
	app.Get("/ws/:groupId/:id", websocket.New(func(c *websocket.Conn) {
		logFile, err := os.OpenFile(GetDefaultLogFileName(), os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)
		if err != nil {
			log.Fatalf("error opening file: %v", err)
		}
		defer logFile.Close()

		log.SetOutput(logFile)

		jwtoken := c.Query("wttoken")
		println(jwtoken)
		if jwtoken == "" {
			c.Conn.Close()
		} else {
			// c.Locals is added to the *websocket.Conn

			log.Println(c.Locals("allowed"))             // true
			log.Println("id:", c.Params("id"))           // 123, can be used as room-id
			log.Println("groupId:", c.Params("groupId")) // 123, can be used as room-id
			log.Println("v:", c.Query("v"))              // 1.0
			userName := c.Query("userName")
			log.Println("userName:", userName)
			userIdString := c.Query("userId")
			//conversion to uint base10(decimal) with 32 bit
			userId64, errConversion := strconv.ParseUint(userIdString, 10, 32)
			if errConversion != nil {
				// handle error
				log.Println("errConversion: ", errConversion)
				c.Conn.Close()
			}
			userId := uint(userId64)
			log.Println("userId:", userId)
			//validate Token
			//var tokenObj jwt.Token
			// tokenObj, errParsing := jwt.Parse(jwtoken, func(token *jwt.Token) (interface{}, error) {
			// 	return []byte("AllYourBase"), nil
			// })

			// if errParsing != nil {
			// 	// handle error
			// 	log.Println("errParsing: ", errParsing)
			// 	c.Conn.Close()
			// }

			//if controllers.ValidToken(tokenObj, userIdString) {
			log.Println("cookies-session:", c.Cookies("session")) // ""
			currentConn := WebSocketConnection{Conn: c, UserName: userName, UserId: userId}
			//add the new connection to list
			connections = append(connections, &currentConn)
			broadcastMessage(&currentConn, MESSAGE_NEW_USER, "User: $userName Joined")

			// websocket.Conn bindings https://pkg.go.dev/github.com/fasthttp/websocket?tab=doc#pkg-index
			var (
				mt  int
				msg []byte
				err error
			)
			log.Printf("mt: %d", mt)

			for {
				if mt, msg, err = c.ReadMessage(); err != nil {
					log.Println("read:", err)
					//user might be disconnected
					broadcastMessage(&currentConn, MESSAGE_LEAVE, "User:$username Might Be Leaving")
					ejectConnection(&currentConn)
					break
				}
				log.Printf("recv: %s", msg)
				broadcastMessage(&currentConn, MESSAGE_CHAT, string(msg))

				if err = c.WriteMessage(mt, msg); err != nil {
					log.Println("write:", err)
					break
				}
			}
			// } else {
			// 	log.Println("Invalid Token")
			// 	c.Conn.Close()
			// }
		}

	}))

	app.Get("/secured/wss/:groupId/:id", websocket.New(func(c *websocket.Conn) {

		// c.Locals is added to the *websocket.Conn

		log.Println(c.Locals("allowed"))             // true
		log.Println("id:", c.Params("id"))           // 123, can be used as room-id
		log.Println("groupId:", c.Params("groupId")) // 123, can be used as room-id
		//query string param
		log.Println("v:", c.Query("v")) // 1.0
		username := c.Query("username")
		log.Println("username:", c.Query("username"))
		log.Println("cookies-session:", c.Cookies("session")) // ""
		//saving connection for broadcasting
		currentConn := WebSocketConnection{Conn: c, UserName: username}
		//add the new connection to list
		connections = append(connections, &currentConn)
		message := fmt.Sprintf("User: %s Joined", username)
		broadcastMessage(&currentConn, MESSAGE_NEW_USER, message)

		// websocket.Conn bindings https://pkg.go.dev/github.com/fasthttp/websocket?tab=doc#pkg-index
		var (
			mt  int
			msg []byte
			err error
		)
		log.Printf("mt: %d", mt)

		for {
			if mt, msg, err = c.ReadMessage(); err != nil {
				log.Println("read:", err)
				//user might be disconnected
				broadcastMessage(&currentConn, MESSAGE_LEAVE, "User:$username Might Be Leaving")
				ejectConnection(&currentConn)
				break
			}
			log.Printf("recv: %s", msg)
			broadcastMessage(&currentConn, MESSAGE_CHAT, string(msg))

			if err = c.WriteMessage(mt, msg); err != nil {
				log.Println("write:", err)
				break
			}
		}

	}))

	app.Get("/secured/admin/services/wss/:groupId/:id", websocket.New(func(c *websocket.Conn) {

		// c.Locals is added to the *websocket.Conn

		log.Println(c.Locals("allowed"))             // true
		log.Println("id:", c.Params("id"))           // 123, can be used as room-id
		log.Println("groupId:", c.Params("groupId")) // 123, can be used as room-id
		//query string param
		log.Println("v:", c.Query("v")) // 1.0
		username := c.Query("username")
		log.Println("username:", c.Query("username"))
		log.Println("cookies-session:", c.Cookies("session")) // ""
		//saving connection for broadcasting
		currentConn := WebSocketConnection{Conn: c, UserName: username}
		//add the new connection to list
		connections = append(connections, &currentConn)
		broadcastMessage(&currentConn, MESSAGE_NEW_USER, "User: $username Joined")

		// websocket.Conn bindings https://pkg.go.dev/github.com/fasthttp/websocket?tab=doc#pkg-index
		var (
			mt  int
			msg []byte
			err error
		)
		log.Printf("mt: %d", mt)

		for {
			if mt, msg, err = c.ReadMessage(); err != nil {
				log.Println("read:", err)
				//user might be disconnected
				broadcastMessage(&currentConn, MESSAGE_LEAVE, "User:$username Might Be Leaving")
				ejectConnection(&currentConn)
				break
			}
			log.Printf("recv: %s", msg)
			broadcastMessage(&currentConn, MESSAGE_CHAT, string(msg))

			if err = c.WriteMessage(mt, msg); err != nil {
				log.Println("write:", err)
				break
			}
		}

	}))

	// Middleware
	api := app.Group("/api", logger.New())
	api.Get("/", controllers.Hello)
	api.Get("/db", controllers.TestDB)

	// Auth
	auth := api.Group("/auth")
	auth.Post("/login", controllers.Login)

	// User
	user := api.Group("/user")
	user.Get("/:id", controllers.GetUser)
	user.Post("/", controllers.CreateUser)
	user.Patch("/:id", middleware.Protected(), controllers.UpdateUser)
	user.Delete("/:id", middleware.Protected(), controllers.DeleteUser)

	// UserType
	userType := api.Group("/usertype")
	userType.Post("/", middleware.Protected(), controllers.CreateUserType)
	userType.Get("/:id", controllers.GetUserType)

	// Product
	product := api.Group("/product")
	product.Get("/", controllers.GetAllProducts)
	product.Get("/:id", controllers.GetProduct)
	product.Post("/", middleware.Protected(), controllers.CreateProduct)
	product.Delete("/:id", middleware.Protected(), controllers.DeleteProduct)

	// Event
	wtEvent := api.Group("/event")
	wtEvent.Post("/addevent/", middleware.Protected(), controllers.CreateWtEvent)

	wtEvent.Post("/addeventdata/", middleware.Protected(), controllers.CreateWtEventData)
	wtEvent.Post("/createdatagroup/", middleware.Protected(), controllers.CreateWtDataGroup)

	wtEvent.Get("/geteventgroup/:id", middleware.Protected(), controllers.GetWtEventGroup)
	wtEvent.Get("/getevent/:id", middleware.Protected(), controllers.GetWtEvent)
	wtEvent.Get("/geteventdata/:id", middleware.Protected(), controllers.GetWtEventData)
	wtEvent.Get("/getdatagroup/:id", middleware.Protected(), controllers.GetWtDataGroup)
	wtEvent.Get("/getdatagroup/:groupName", middleware.Protected(), controllers.GetWtDataGroupByName)

	//webrtc
	wtwebrtc := api.Group("/webrtc")
	wtwebrtc.Post("/sdp/m/:meetingId/c/:userId/p/:peerId/s/:isSender", controllers.GetWebRtcAccess)
}

func GetDefaultLogFileName() string {

	currentTime := time.Now()
	layout := "20060102"
	formattedDate := currentTime.Format(layout)
	//layout := "20060102"
	//formattedDate, _ := time.Parse(layout, currentTime)
	//currentYear := currentTime.Year()
	//currentMonth := currentTime.Month()
	//currentDay := currentTime.Day()
	currentHour := currentTime.Hour()
	logFilenamePrefix := fmt.Sprintf("%s%d.alaqsha.log", formattedDate, currentHour)
	logPath := "./logs/"

	return fmt.Sprintf("%s%s", logPath, logFilenamePrefix)
}
