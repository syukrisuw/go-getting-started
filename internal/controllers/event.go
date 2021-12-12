package controllers

import (
	"time"

	"github.com/heroku/wanthatgows/internal/database"
	"github.com/heroku/wanthatgows/internal/models"

	"github.com/gofiber/fiber/v2"
)

// GetWtEvent get an event
func GetWtEventGroup(c *fiber.Ctx) error {
	id := c.Params("id")
	db := database.WtGormDB
	var wtEventGroup models.WtEventGroup
	db.Find(&wtEventGroup, id)
	if wtEventGroup.EventGroupName == "" {
		return c.Status(404).JSON(fiber.Map{"status": "error", "message": "No event found with ID", "data": nil})
	}
	return c.JSON(fiber.Map{"status": "success", "message": "WtEvent found", "data": wtEventGroup})
}

// GetWtEvent get an event
func GetWtEvent(c *fiber.Ctx) error {
	id := c.Params("id")
	db := database.WtGormDB
	var wtEvent models.WtEvent
	db.Find(&wtEvent, id)
	if wtEvent.EventName == "" {
		return c.Status(404).JSON(fiber.Map{"status": "error", "message": "No event found with ID", "data": nil})
	}
	return c.JSON(fiber.Map{"status": "success", "message": "WtEvent found", "data": wtEvent})
}

// GetWtEvent get an eventdata list for eventid
func GetWtEventData(c *fiber.Ctx) error {
	id := c.Params("id")
	db := database.WtGormDB
	var wtEventData models.WtEventData
	db.Find(&wtEventData, id)
	if wtEventData.EventId == 0 {
		return c.Status(404).JSON(fiber.Map{"status": "error", "message": "No WtEventData found with ID", "data": nil})
	}
	return c.JSON(fiber.Map{"status": "success", "message": "WtEventData found", "data": wtEventData})
}

// GetDataGroup get an eventdata list for eventid
func GetWtDataGroup(c *fiber.Ctx) error {
	id := c.Params("id")
	db := database.WtGormDB
	var wtDataGroup models.WtDataGroup
	db.Find(&wtDataGroup, id)
	if wtDataGroup.DataGroupName == "" {
		return c.Status(404).JSON(fiber.Map{"status": "error", "message": "No WtDataGroup found with ID", "data": nil})
	}
	return c.JSON(fiber.Map{"status": "success", "message": "WtDataGroup found", "data": wtDataGroup})
}

func GetWtDataGroupByName(c *fiber.Ctx) error {
	groupName := c.Params("groupName")
	db := database.WtGormDB
	var wtDataGroup models.WtDataGroup
	db.Where("dataGroupName = ?", groupName).First(&wtDataGroup)
	if wtDataGroup.DataGroupName == "" {
		return c.Status(404).JSON(fiber.Map{"status": "error", "message": "No WtDataGroup found with groupName $groupName", "data": nil})
	}
	return c.JSON(fiber.Map{"status": "success", "message": "WtDataGroup found", "data": wtDataGroup})
}

//create WtEventGroup or Event classification
func CreateWtEvetGroup(c *fiber.Ctx) error {
	type RespWtEventGroupModel struct {
		EventGroupId          uint   `json:"eventGroupId"`
		EventGroupName        string `json:"eventGroupName"`
		EventGroupDescription string `json:"eventGroupDescription"`
		TriggeredByGroupId    uint   `json:"triggeredByGroupId"`
		WillCallGroupId       uint   `json:"willCallGroupId"`
	}
	db := database.WtGormDB
	wtEventGroup := new(models.WtEventGroup)

	if err := c.BodyParser(wtEventGroup); err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "error", "message": "Review your WtEventGroup input", "data": err})
	}

	if err := db.Create(&wtEventGroup).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "error", "message": "Couldn't create WtEventGroup", "data": err})
	}

	respWtEventGroupModel := RespWtEventGroupModel{
		EventGroupId:          wtEventGroup.ID,
		EventGroupName:        wtEventGroup.EventGroupName,
		EventGroupDescription: wtEventGroup.EventGroupDescription,
		TriggeredByGroupId:    wtEventGroup.TriggeredByGroupId,
		WillCallGroupId:       wtEventGroup.WillCallGroupId,
	}

	return c.JSON(fiber.Map{"status": "success", "message": "WtEventGroup Created", "data": respWtEventGroupModel})
}

// CreateUser new WtEvent
func CreateWtEvent(c *fiber.Ctx) error {
	type RespWtEventModel struct {
		EventName       string `json:"eventName"`
		EventGroupId    uint   `json:"eventGroupId"`
		EventJsonString string `json:"eventJsonString"`
	}

	db := database.WtGormDB
	wtEvent := new(models.WtEvent)

	if err := c.BodyParser(wtEvent); err != nil {
		// bodyData := string(c.Body())
		// message := fmt.Sprintf(" %s cannot be parsed", bodyData)
		// log.Fatal(message)
		return c.Status(500).JSON(fiber.Map{"status": "error", "message": "Review your WtEvent input", "data": err})

	}

	if err := db.Create(&wtEvent).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "error", "message": "Couldn't add WtEvent", "data": err})
	}

	respWtEventModel := RespWtEventModel{
		EventName:       wtEvent.EventName,
		EventGroupId:    wtEvent.EventGroupId,
		EventJsonString: wtEvent.EventJsonString,
	}

	return c.JSON(fiber.Map{"status": "success", "message": "WtEvent Added", "data": respWtEventModel})
}

func CreateWtEventData(c *fiber.Ctx) error {
	type RespWtEventDataModel struct {
		EventId     uint      `json:"eventId"`
		DataGroupId uint      `json:"dataGroupId"`
		StringValue string    `json:"stringValue"`
		IntValue    uint      `json:"intValue"`
		DoubleValue float64   `json:"floatValue"`
		DateValue   time.Time `json:"dateValue"`
	}

	db := database.WtGormDB
	wtEventData := new(models.WtEventData)

	if err := c.BodyParser(wtEventData); err != nil {
		// bodyData := string(c.Body())
		// message := fmt.Sprintf(" %s cannot be parsed", bodyData)
		// log.Fatal(message)
		return c.Status(500).JSON(fiber.Map{"status": "error", "message": "Review your WtEventData input", "data": err})

	}

	if err := db.Create(&wtEventData).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "error", "message": "Couldn't add WtEventData", "data": err})
	}

	respWtEventDataModel := RespWtEventDataModel{
		EventId:     wtEventData.EventId,
		DataGroupId: wtEventData.DataGroupId,
		StringValue: wtEventData.StringValue,
		IntValue:    wtEventData.IntValue,
		DoubleValue: wtEventData.DoubleValue,
		DateValue:   wtEventData.DateValue,
	}

	return c.JSON(fiber.Map{"status": "success", "message": "WtEventData Added", "data": respWtEventDataModel})
}

//create data group or classification
func CreateWtDataGroup(c *fiber.Ctx) error {
	type RespWtDataGroupModel struct {
		DataGroupId   uint   `json:"dataGroupId"`
		DataGroupName string `json:"dataGroupName"`
		DataGroupDesc string `json:"dataGroupDesc"`
	}
	db := database.WtGormDB
	wtDataGroup := new(models.WtDataGroup)

	if err := c.BodyParser(wtDataGroup); err != nil {
		// bodyData := string(c.Body())
		// message := fmt.Sprintf(" %s cannot be parsed", bodyData)
		// log.Fatal(message)
		return c.Status(500).JSON(fiber.Map{"status": "error", "message": "Review your WtDataGroupinput", "data": err})

	}

	if err := db.Create(&wtDataGroup).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "error", "message": "Couldn't create WtDataGroup", "data": err})
	}

	respWtDataGroup := RespWtDataGroupModel{
		DataGroupId:   wtDataGroup.ID,
		DataGroupName: wtDataGroup.DataGroupName,
		DataGroupDesc: wtDataGroup.DataGroupDesc,
	}

	return c.JSON(fiber.Map{"status": "success", "message": "WtDataGroup Created", "data": respWtDataGroup})
}
