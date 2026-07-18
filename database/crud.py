from database.database import SessionLocal
from database.models_db import AQIData


def save_dashboard(
    current_aqi,
    prediction,
    temperature,
    humidity,
    weather,
    pollutant,
    health_advisory
):

    db = SessionLocal()

    data = AQIData(
        current_aqi=current_aqi,
        prediction=prediction,
        temperature=temperature,
        humidity=humidity,
        weather=weather,
        pollutant=pollutant,
        health_advisory=health_advisory
    )

    db.add(data)

    db.commit()

    db.close()