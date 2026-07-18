from pydantic import BaseModel


class DashboardResponse(BaseModel):
    current_aqi: int
    prediction: float
    temperature: float
    humidity: int
    weather: str
    pollutant: str
    health_advisory: str


class ForecastResponse(BaseModel):
    forecast: float


class HealthRequest(BaseModel):
    aqi: int


class HealthResponse(BaseModel):
    advisory: str