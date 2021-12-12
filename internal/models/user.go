package models

import "gorm.io/gorm"

// User struct
type User struct {
	gorm.Model
	UserName   string `gorm:"uniqueIndex;not null" json:"userName"`
	Email      string `gorm:"uniqueIndex;not null" json:"email"`
	Password   string `json:"password"`
	FirstName  string `json:"firstName"`
	LastName   string `json:"lastName"`
	UserTypeId uint   `json:"userTypeId"`
}
