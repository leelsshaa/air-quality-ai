import os
import requests
from dotenv import load_dotenv

from services.weather_cache import (
    get_cached_weather,
    save_weather
)

# Load environment variables from .env
load_dotenv()

# Read API key and city from .env
API_KEY = os.getenv("API_KEY")


def get_weather(city):

    # Check if weather is already cached
    cached = get_cached_weather(city)

    if cached:
        return cached

    # Fetch live weather
    url = (
        f"https://api.openweathermap.org/data/2.5/weather"
        f"?q={city}&appid={API_KEY}&units=metric"
    )

    response = requests.get(url)

    # If API fails
    if response.status_code != 200:
        print("Weather API Error:", response.json())
        return None

    data = response.json()

    # Store weather data
    weather = {
        "temperature": data["main"]["temp"],
        "humidity": data["main"]["humidity"],
        "weather": data["weather"][0]["main"]
    }

    # Save into cache
    save_weather(city, weather)

    return weather


if __name__ == "__main__":
    print(get_weather())