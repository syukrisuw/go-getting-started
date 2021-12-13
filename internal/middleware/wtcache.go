package middleware

import (
	"time"

	"github.com/heroku/alaqsha/vendor/github.com/patrickmn/go-cache"
)

var WtCache *cache.Cache

func SetupCache() {
	WtCache = cache.New(5*time.Minute, 10*time.Minute)
}

func GetValueForKey(keyName string) string {
	value, found := WtCache.Get(keyName)
	if found {
		return value.(string)
	} else {
		return ""
	}

}

func SetValueForKey(keyName string, value string) int {
	WtCache.Set(keyName, value, cache.DefaultExpiration)

	return 1
}
