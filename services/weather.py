import requests

from services.weather_cache import (
    get_cached_weather,
    save_weather
)

API_KEY = "053332e25ea1280ac00c481f35536a87"
CITY = "Chennai"


def get_weather():

    # Check if weather is already cached
    cached = get_cached_weather()

    if cached:
        return cached

    # Fetch live weather
    url = f"https://api.openweathermap.org/data/2.5/weather?q={CITY}&appid={API_KEY}&units=metric"

    response = requests.get(url)

    data = response.json()

    # If API fails
    if response.status_code != 200:
        return None

    # Store weather data
    weather = {
        "temperature": data["main"]["temp"],
        "humidity": data["main"]["humidity"],
        "weather": data["weather"][0]["main"]
    }

    # Save into cache
    save_weather(weather)

    return weather


if __name__ == "__main__":
    print(get_weather())