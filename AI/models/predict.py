import pickle
import pandas as pd
from pathlib import Path

# Get absolute path to the saved model
BASE_DIR = Path(__file__).resolve().parent
MODEL_PATH = BASE_DIR.parent / "saved_models" / "aqi_model.pkl"

# Load trained model
with open(MODEL_PATH, "rb") as file:
    model = pickle.load(file)


def predict_aqi(input_data):
    """
    Predict AQI from input features.

    Parameters:
        input_data (dict): Dictionary containing air quality features.

    Returns:
        dict: Predicted AQI and confidence score.
    """

    # Required features
    required_columns = [
        "PM2.5",
        "PM10",
        "NO",
        "NO2",
        "NOx",
        "NH3",
        "CO",
        "SO2",
        "O3",
        "Benzene",
        "Toluene",
        "Xylene",
        "Year",
        "Month",
        "Day"
    ]

    # Check for missing fields
    for column in required_columns:
        if column not in input_data:
            raise ValueError(f"Missing required field: {column}")

    # Convert dictionary to DataFrame
    data = pd.DataFrame([input_data])

    # Predict AQI
    prediction = round(float(model.predict(data)[0]), 2)

    # MVP confidence score
    confidence = 92

    return {
        "predicted_aqi": prediction,
        "confidence": f"{confidence}%"
    }


# Test block (runs only when this file is executed directly)
if __name__ == "__main__":
    sample_input = {
        "PM2.5": 120,
        "PM10": 180,
        "NO": 15,
        "NO2": 45,
        "NOx": 60,
        "NH3": 18,
        "CO": 2.5,
        "SO2": 20,
        "O3": 40,
        "Benzene": 4,
        "Toluene": 8,
        "Xylene": 1,
        "Year": 2015,
        "Month": 1,
        "Day": 1
    }

    result = predict_aqi(sample_input)
    print(result)