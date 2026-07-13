import pickle
import pandas as pd

# Load trained model
with open("../saved_models/aqi_model.pkl", "rb") as file:
    model = pickle.load(file)

def predict_aqi(input_data):

    # Convert input dictionary to DataFrame
    data = pd.DataFrame([input_data])

    # Predict AQI
    prediction = model.predict(data)[0]

    # Confidence Score (MVP)
    confidence = 92

    return {
    "predicted_aqi": float(prediction),
    "confidence": f"{confidence}%"
}