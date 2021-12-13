package models

import (
	"time"

	"gorm.io/gorm"
)

// User struct
type WtSessionData struct {
	ID        uint `gorm:"primarykey"`
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt gorm.DeletedAt `gorm:"index"`
	UserId    uint           `gorm:"uniqueIndex;not null" json:"userId"`
	UserWsKey string         `json:"userWsKey"`
}
