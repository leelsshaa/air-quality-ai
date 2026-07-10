import pickle
import pandas as pd


with open("../saved_models/aqi_model.pkl", "rb") as file:
    model = pickle.load(file)

def predict_aqi(input_data):
   

    data = pd.DataFrame([input_data])

    prediction = model.predict(data)

    return prediction[0]