from sqlalchemy import Column, Integer, Float, String
from database.database import Base


class AQIData(Base):
    __tablename__ = "aqi_data"

    id = Column(Integer, primary_key=True, index=True)

    current_aqi = Column(Integer)

    prediction = Column(Float)

    temperature = Column(Float)

    humidity = Column(Integer)

    weather = Column(String)

    pollutant = Column(String)

    health_advisory = Column(String)


class APILog(Base):
    __tablename__ = "api_logs"

    id = Column(Integer, primary_key=True, index=True)

    aqi = Column(Integer)

    forecast = Column(Float)

    health_advice = Column(String)