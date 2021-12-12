package router

import (
	"fmt"
	"log"

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

type SocketPayload struct {
	Message string
}

type SocketResponse struct {
	From    string
	Type    string
	Message string
}

type WebSocketConnection struct {
	*websocket.Conn
	Username string
}

func broadcastMessage(currentConn *WebSocketConnection, kind, message string) {
	if kind == MESSAGE_LEAVE {
		message = fmt.Sprintf("user %s %s", currentConn.Username, message)
	}

	for _, eachConn := range connections {
		if eachConn == currentConn {
			continue
		}

		eachConn.WriteJSON(SocketResponse{
			From:    currentConn.Username,
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
	app.Static("/", "/app/web/static") //For Heroku
	//app.Static("/", "./web/static") //For Localhost
	//WsMessageService
	app.Get("/ws/:id", websocket.New(func(c *websocket.Conn) {

		// c.Locals is added to the *websocket.Conn
		log.Println(c.Locals("allowed"))   // true
		log.Println("id:", c.Params("id")) // 123, can be used as room-id
		log.Println("v:", c.Query("v"))    // 1.0
		username := c.Query("username")
		log.Println("username:", c.Query("username"))
		log.Println("cookies-session:", c.Cookies("session")) // ""
		currentConn := WebSocketConnection{Conn: c, Username: username}
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

	app.Get("/secured/wss/:id/:grouId", websocket.New(func(c *websocket.Conn) {

		// c.Locals is added to the *websocket.Conn

		log.Println(c.Locals("allowed"))           // true
		log.Println("id:", c.Params("id"))         // 123, can be used as room-id
		log.Println("grouId:", c.Params("grouId")) // 123, can be used as room-id
		//query string param
		log.Println("v:", c.Query("v")) // 1.0
		username := c.Query("username")
		log.Println("username:", c.Query("username"))
		log.Println("cookies-session:", c.Cookies("session")) // ""
		//saving connection for broadcasting
		currentConn := WebSocketConnection{Conn: c, Username: username}
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

	app.Get("/secured/admin/services/wss/:groupid/:id", websocket.New(func(c *websocket.Conn) {

		// c.Locals is added to the *websocket.Conn

		log.Println(c.Locals("allowed"))           // true
		log.Println("id:", c.Params("id"))         // 123, can be used as room-id
		log.Println("grouId:", c.Params("grouId")) // 123, can be used as room-id
		//query string param
		log.Println("v:", c.Query("v")) // 1.0
		username := c.Query("username")
		log.Println("username:", c.Query("username"))
		log.Println("cookies-session:", c.Cookies("session")) // ""
		//saving connection for broadcasting
		currentConn := WebSocketConnection{Conn: c, Username: username}
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
