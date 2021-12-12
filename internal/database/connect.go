package database

import (
	"database/sql"
	"fmt"
	"os"

	"github.com/heroku/wanthatgows/internal/models"
	_ "github.com/lib/pq"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var WtGormDB *gorm.DB

// ConnectDB connect to db
func ConnectDB() {
	var err error
	databaseUrl, isExist := os.LookupEnv("DATABASE_URL")
	var sqlDB *sql.DB
	if isExist && databaseUrl != "" {
		//heroku server
		sqlDB, err = sql.Open("postgres", os.Getenv("DATABASE_URL"))
		if err != nil {
			panic("failed to connect database")
		}
	} else {
		//localconnection
		sqlDB, err = sql.Open("postgres", "user=wanthatadmin password=Wulan#06 dbname=wanthatdb sslmode=disable port=5432")
		if err != nil {
			panic("failed to connect database")
		}
	}

	// SetMaxIdleConns sets the maximum number of connections in the idle connection pool.
	sqlDB.SetMaxIdleConns(10)

	// SetMaxOpenConns sets the maximum number of open connections to the database.
	sqlDB.SetMaxOpenConns(10)

	WtGormDB, err = gorm.Open(postgres.New(postgres.Config{
		Conn: sqlDB,
	}), &gorm.Config{})

	if err != nil {
		panic("failed to connect database")
	}
	if WtGormDB == nil {
		panic("failed to connect database")
	}

	fmt.Println("Connection Opened to Database")
	WtGormDB.AutoMigrate(&models.Note{})
	WtGormDB.AutoMigrate(&models.User{})
	WtGormDB.AutoMigrate(&models.UserType{})
	WtGormDB.AutoMigrate(&models.Product{})
	WtGormDB.AutoMigrate(&models.WtEvent{})
	WtGormDB.AutoMigrate(&models.WtDataGroup{})
	WtGormDB.AutoMigrate(&models.WtEventData{})
	//message := fmt.Sprintf("Database Migrated %s", WtGormDB.Error.Error())
	message := "test"
	fmt.Println(message)
}
