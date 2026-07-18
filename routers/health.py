from fastapi import APIRouter
from models.schemas import HealthRequest, HealthResponse

from llm.advisor import generate_health_advice

router = APIRouter()


@router.post("/health-advisory", response_model=HealthResponse)
def health_advisory(request: HealthRequest):

    advice = generate_health_advice(request.aqi)

    return HealthResponse(
        advisory=advice
    )