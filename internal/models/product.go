package models

import "gorm.io/gorm"

// Product struct
type Product struct {
	gorm.Model
	Title       string `gorm:"not null" json:"title"`
	Description string `json:"description"`
	Amount      int    `json:"amount"`
}
