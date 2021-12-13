package config

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
)

// Config func to get env value
func Config(key string) string {
	// load .env file
	err := godotenv.Load(".env")
	if err != nil {
		fmt.Print("Error loading .env file")

	}
	return os.Getenv(key)
}

func GetSecretKey() string {
	//base64 of string alaqsha.permata.bintaro
	return "YWxhcXNoYS5wZXJtYXRhLmJpbnRhcm8="
}

func GetWsKeyHeader() string {
	//base64 of string alaqsha.permata.bintaro
	return "alaqsha|wsUserKey|"
}
