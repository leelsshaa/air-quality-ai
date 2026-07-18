from fastapi import APIRouter
from models.schemas import DashboardResponse

router = APIRouter()


@router.get("/dashboard", response_model=DashboardResponse)
def get_dashboard():

    return DashboardResponse(
        aqi=220,
        temperature=31,
        humidity=66,
        pollutant="PM2.5"
    )