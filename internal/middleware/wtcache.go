package middleware

import (
	"time"

	"github.com/patrickmn/go-cache"
)

var WtCache *cache.Cache

//const DefaultCacheExpiration := 30*time.Minute

func SetupCache() {
	WtCache = cache.New(30*time.Minute, 15*time.Minute)
}

func GetValueForKey(keyName string) string {
	value, found := WtCache.Get(keyName)
	if found {
		println("Get key: ", keyName, " value: ", value.(string))
		return value.(string)
	} else {
		println("Get key: ", keyName, " NOT FOUND")
		return ""
	}

}

func SetValueForKey(keyName string, value string) int {
	//

	WtCache.Set(keyName, value, cache.DefaultExpiration)

	//check
	checkValue := GetValueForKey(keyName)
	println("Check Set Cache key:", keyName, " value:", checkValue)

	//end check
	println("Saving key:", keyName, " value:", value)
	return 1
}
