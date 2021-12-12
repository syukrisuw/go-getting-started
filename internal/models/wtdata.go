package models

import "gorm.io/gorm"

// User struct
type WtDataGroup struct {
	gorm.Model
	DataGroupName string `gorm:"uniqueIndex;not null" json:"dataGroupName"`
	DataGroupDesc string `json:"dataGroupDesc"`
	DataGroupType uint   `json:"dataGroupType"`
}
