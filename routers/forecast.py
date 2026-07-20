from fastapi import APIRouter
from models.schemas import ForecastResponse
from ai.predict import predict_aqi   # <-- Member 3's file

router = APIRouter()

@router.get("/forecast", response_model=ForecastResponse)
def get_forecast():

    # Place sample_input here 
    # replace with actual input from member 1(frontend)
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

    prediction = predict_aqi(sample_input)

    return ForecastResponse(
        forecast=prediction["predicted_aqi"]
    )