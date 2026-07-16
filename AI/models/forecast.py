from pathlib import Path
import pickle
import pandas as pd

# Get absolute path of model
BASE_DIR = Path(__file__).resolve().parent
MODEL_PATH = BASE_DIR.parent / "saved_models" / "aqi_model.pkl"

# Load trained model
with open(MODEL_PATH, "rb") as file:
    model = pickle.load(file)


def forecast_next_72_hours(input_data):

    data = pd.DataFrame([input_data])

    prediction = model.predict(data)[0]

    forecast = {
        "24_hours": round(float(prediction), 2),
        "48_hours": round(float(prediction + 3), 2),
        "72_hours": round(float(prediction + 6), 2)
    }

    return forecast
