from fastapi import APIRouter

from models.schemas import DashboardResponse
from services.weather import get_weather
from ai.predict import predict_aqi
from LLM.advisor import generate_health_advice
from database.crud import save_dashboard
from services.cache import get_cached, save_cache

router = APIRouter()


@router.get("/dashboard", response_model=DashboardResponse)
def get_dashboard():

    # Live weather
    weather = get_weather()

    # Sample input for prediction
    sample_input = {
        "PM2.5": 120,
        "PM10": 180,
        "NO": 15,
        "NO2": 45,
        "NOx": 60,
        "NH3": 18,
        "CO": 2.5,
        "SO2": 20,
        "O3": 40,
        "Benzene": 4,
        "Toluene": 8,
        "Xylene": 1,
        "Year": 2015,
        "Month": 1,
        "Day": 1
    }

    # AI Prediction
    prediction = predict_aqi(sample_input)

    aqi = round(prediction["predicted_aqi"])

    # Check cache
    advice = get_cached(aqi)

    # If not in cache, generate and save
    if advice is None:
        advice = generate_health_advice(aqi)
        save_cache(aqi, advice)

    # Save data into SQLite
    save_dashboard(
        current_aqi=220,
        prediction=prediction["predicted_aqi"],
        temperature=weather["temperature"],
        humidity=weather["humidity"],
        weather=weather["weather"],
        pollutant="PM2.5",
        health_advisory=advice
    )

    # Return API response
    return DashboardResponse(
        current_aqi=220,
        prediction=prediction["predicted_aqi"],
        temperature=weather["temperature"],
        humidity=weather["humidity"],
        weather=weather["weather"],
        pollutant="PM2.5",
        health_advisory=advice
    )