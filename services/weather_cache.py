import time

weather_cache = {}

CACHE_TIME = 300


def get_cached_weather():

    if "weather" in weather_cache:

        data, timestamp = weather_cache["weather"]

        if time.time() - timestamp < CACHE_TIME:

            return data

    return None


def save_weather(weather):

    weather_cache["weather"] = (

        weather,

        time.time()

    )