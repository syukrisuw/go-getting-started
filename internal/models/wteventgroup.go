package models

import "gorm.io/gorm"

// User struct
type WtEventGroup struct {
	gorm.Model
	EventGroupName        string `gorm:"uniqueIndex;not null" json:"eventName"`
	EventGroupDescription string `json:"eventDesc"`
	TriggeredByGroupId    uint   `json:"triggeredByGroupId"`
	WillCallGroupId       uint   `json:"willCallGroupId"`
}
