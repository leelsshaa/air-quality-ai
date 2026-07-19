from fastapi import APIRouter, HTTPException

from models.schemas import DashboardResponse
from services.weather import get_weather
from ai.predict import predict_aqi
from LLM.advisor import generate_health_advice
from database.crud import save_dashboard, save_log
from services.cache import get_cached, save_cache

router = APIRouter()


@router.get("/dashboard", response_model=DashboardResponse)
def get_dashboard():
    print("Request Received")

    # -------------------------
    # Get Weather
    # -------------------------
    weather = get_weather()

    if weather is None:
        raise HTTPException(
            status_code=500,
            detail="Unable to fetch weather data."
        )

    # -------------------------
    # City & Pollutant
    # -------------------------
    city = "Chennai"
    pollutant = "PM2.5"
    if not city.strip():
        raise HTTPException(
            status_code=400,
            detail="Invalid city name."
    )

    if not pollutant:
        raise HTTPException(
            status_code=400,
            detail="Pollutant data is missing."
        )

    # -------------------------
    # Sample Input
    # -------------------------
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

    # -------------------------
    # Validate AQI Input
    # -------------------------
    if sample_input["PM2.5"] is None:
        raise HTTPException(
            status_code=400,
            detail="AQI data is missing."
        )

    # -------------------------
    # Prediction
    # -------------------------
    prediction = predict_aqi(sample_input)
    print("Prediction Generated")
    current_aqi = 220

    if prediction is None:
        raise HTTPException(
            status_code=500,
            detail="Prediction failed."
        )

    aqi = round(prediction["predicted_aqi"])

    # -------------------------
    # AQI Category
    # -------------------------
    if aqi <= 50:
        aqi_category = "Good"
    elif aqi <= 100:
        aqi_category = "Satisfactory"
    elif aqi <= 200:
        aqi_category = "Moderate"
    elif aqi <= 300:
        aqi_category = "Poor"
    elif aqi <= 400:
        aqi_category = "Very Poor"
    else:
        aqi_category = "Severe"

    # -------------------------
    # Cache
    # -------------------------
    advice = get_cached(aqi)

    if advice is None:
        try:
            advice = generate_health_advice(aqi)
            print("Health Advisory Generated")
            save_cache(aqi, advice)
        except Exception:
            raise HTTPException(
            status_code=500,
            detail="Health advisory generation failed."
        )

    # -------------------------
    # Save Dashboard
    # -------------------------
    save_dashboard(
        current_aqi=current_aqi,
        prediction=prediction["predicted_aqi"],
        temperature=weather["temperature"],
        humidity=weather["humidity"],
        weather=weather["weather"],
        pollutant=pollutant,
        health_advisory=advice
    )

    # -------------------------
    # Save Log
    # -------------------------
    save_log(
        aqi=current_aqi,
        forecast=prediction["predicted_aqi"],
        advice=advice
    )

    # -------------------------
    # Response
    # -------------------------
    print("Response Sent")
    return DashboardResponse(
        
        city=city,
        current_aqi=current_aqi,
        prediction=prediction["predicted_aqi"],
        aqi_category=aqi_category,
        temperature=weather["temperature"],
        humidity=weather["humidity"],
        weather=weather["weather"],
        pollutant=pollutant,
        health_advisory=advice,
        status="success"
    )