from pydantic import BaseModel


class DashboardResponse(BaseModel):
    city: str
    current_aqi: int
    prediction: float
    aqi_category: str
    temperature: float
    humidity: int
    weather: str
    pollutant: str
    health_advisory: str
    status: str


class ForecastResponse(BaseModel):
    forecast: float


class HealthRequest(BaseModel):
    aqi: int


class HealthResponse(BaseModel):
    advisory: str