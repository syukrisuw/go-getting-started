package models

import "gorm.io/gorm"

// User struct
type WtEvent struct {
	gorm.Model
	EventName          string `json:"eventName"`
	EventDescription   string `json:"eventDesc"`
	EventGroupId       uint   `json:"eventGroupId"`
	EventJsonString    string `json:"eventJsonString"`
	TriggeredByEventId uint   `json:"triggeredByEventId"`
	WillCallEventId    uint   `json:"willCallEventId"`
}
