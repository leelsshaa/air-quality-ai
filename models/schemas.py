from pydantic import BaseModel

class SourceAnalysis(BaseModel):
    dominant_pollutant: str
    likely_sources: list[str]
    analysis: str


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
    source_analysis: SourceAnalysis
    status: str


class ForecastResponse(BaseModel):
    forecast: float


class HealthRequest(BaseModel):
    aqi: int


class HealthResponse(BaseModel):
    advisory: str