import time

weather_cache = {}

CACHE_TIME = 300  # 5 minutes


def get_cached_weather(city):
    if city in weather_cache:

        data, timestamp = weather_cache[city]

        if time.time() - timestamp < CACHE_TIME:
            return data

    return None


def save_weather(city, weather):
    weather_cache[city] = (
        weather,
        time.time()
    )