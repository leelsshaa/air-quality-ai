import pickle

# Load trained model
with open("../saved_models/aqi_model.pkl", "rb") as file:
    model = pickle.load(file)


def forecast_next_72_hours(input_data):

    prediction = model.predict(input_data)[0]

    forecast = {
        "24_hours": round(prediction),
        "48_hours": round(prediction + 3),
        "72_hours": round(prediction + 6)
    }

    return forecast