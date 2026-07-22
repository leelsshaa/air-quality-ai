from fastapi import APIRouter, HTTPException

from models.schemas import DashboardResponse
from services.weather import get_weather
from services.pollutions import get_pollution
from AI.predict import predict_aqi
from LLM.generator import generate_health_advisory
from database.crud import save_dashboard, save_log
from services.cache import get_cached, save_cache
from datetime import datetime
from services.source_analysis import analyze_pollution_sources
import json

router = APIRouter()


@router.get("/dashboard", response_model=DashboardResponse)
def get_dashboard(city: str = "Chennai"):
    print("Request Received")

    # -------------------------
    # Get Weather
    # -------------------------
    weather = get_weather(city)

    pollution = get_pollution(city)

    if weather is None:
        raise HTTPException(
            status_code=500,
            detail="Unable to fetch weather data."
        )

    # -------------------------
    # City & Pollutant
    # -------------------------
    # Find the dominant pollutant
    pollutant = max(pollution, key=pollution.get)
    source_analysis = analyze_pollution_sources(pollution)
    

    if pollution is None:
        raise HTTPException(
            status_code=500,
            detail="Unable to fetch pollution data."
    )
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
    

    today = datetime.now()

    sample_input = {
        "PM2.5": pollution["PM2.5"],
        "PM10": pollution["PM10"],
        "NO": pollution["NO"],
        "NO2": pollution["NO2"],
        "NH3": pollution["NH3"],
        "CO": pollution["CO"],
        "SO2": pollution["SO2"],
        "O3": pollution["O3"],

    # Temporary values (not provided by OpenWeather)
        "NOx": pollution["NO"] + pollution["NO2"],
        "Benzene": 0,
        "Toluene": 0,
        "Xylene": 0,

        "Year": today.year,
        "Month": today.month,
        "Day": today.day
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

    if prediction is None:
        raise HTTPException(
            status_code=500,
            detail="Prediction failed."
    )

    current_aqi = round(prediction["predicted_aqi"])
    aqi = current_aqi

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
    advice = get_cached(current_aqi)

    if advice is None:
        try:
            advisory = generate_health_advisory(
            city=city,
            aqi_value=current_aqi,
            aqi_category=aqi_category,
            dominant_pollutant=pollutant,
            pollutant_breakdown_json=json.dumps(pollution),
            timestamp=str(datetime.now()),
            season="Summer",
            language_code="en"
            )

        # Extract the text from Gemini's JSON response
            advice = advisory["summary"]["headline"]   # We'll verify this key next

            save_cache(current_aqi, advice)

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
        source_analysis=source_analysis,
        status="success"
    )