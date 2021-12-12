package models

import (
	"time"

	"gorm.io/gorm"
)

// User struct
type UserType struct {
	ID           uint `gorm:"primarykey"`
	CreatedAt    time.Time
	UpdatedAt    time.Time
	DeletedAt    gorm.DeletedAt `gorm:"index"`
	UserTypeName string         `gorm:"uniqueIndex;not null" json:"userTypeName"`
	UserTypeDesc string         `json:"userTypeDesc"`
	EventGroupId uint           `json:"eventGroupId"`
}
