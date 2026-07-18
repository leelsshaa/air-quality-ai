from fastapi import APIRouter
from models.schemas import ForecastResponse
from ai.predictor import predict_tomorrow_aqi

router = APIRouter()

@router.get("/forecast", response_model=ForecastResponse)
def get_forecast():

    predicted = predict_tomorrow_aqi()

    return ForecastResponse(
        forecast=predicted
    )