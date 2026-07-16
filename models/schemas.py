from pydantic import BaseModel


class DashboardResponse(BaseModel):
    aqi: int
    temperature: int
    humidity: int
    pollutant: str


class ForecastResponse(BaseModel):
    forecast: int


class HealthRequest(BaseModel):
    aqi: int


class HealthResponse(BaseModel):
    advisory: str