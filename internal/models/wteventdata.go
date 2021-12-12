package models

import (
	"time"

	"gorm.io/gorm"
)

// User struct
type WtEventData struct {
	gorm.Model
	EventId     uint      `json:"eventId"`
	DataGroupId uint      `json:"dataGroupId"`
	StringValue string    `json:"stringValue"`
	IntValue    uint      `json:"intValue"`
	DoubleValue float64   `json:"floatValue"`
	DateValue   time.Time `json:"dateValue"`
}
