import os
import requests
from dotenv import load_dotenv

# Load .env
load_dotenv()

API_KEY = os.getenv("API_KEY")


def get_pollution(city):
    """
    Fetch live air pollution data for a given city.
    """

    # -------------------------
    # Step 1: Get Latitude & Longitude
    # -------------------------
    weather_url = (
        f"https://api.openweathermap.org/data/2.5/weather"
        f"?q={city}&appid={API_KEY}"
    )

    weather_response = requests.get(weather_url)

    if weather_response.status_code != 200:
        print("Unable to find city.")
        return None

    weather_data = weather_response.json()

    lat = weather_data["coord"]["lat"]
    lon = weather_data["coord"]["lon"]

    # -------------------------
    # Step 2: Get Pollution Data
    # -------------------------
    pollution_url = (
        f"https://api.openweathermap.org/data/2.5/air_pollution"
        f"?lat={lat}&lon={lon}&appid={API_KEY}"
    )

    pollution_response = requests.get(pollution_url)

    if pollution_response.status_code != 200:
        print("Unable to fetch pollution data.")
        return None

    pollution_data = pollution_response.json()

    components = pollution_data["list"][0]["components"]

    return {
        "PM2.5": components["pm2_5"],
        "PM10": components["pm10"],
        "NO": components["no"],
        "NO2": components["no2"],
        "NH3": components["nh3"],
        "SO2": components["so2"],
        "CO": components["co"],
        "O3": components["o3"]
    }


if __name__ == "__main__":
    print(get_pollution("Mumbai"))