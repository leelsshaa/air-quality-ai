from generator import generate_health_advisory

test_cases = [
    {
        "city": "Chennai",
        "aqi_value": 310,
        "aqi_category": "Very Poor",
        "dominant_pollutant": "PM2.5"
    },
    {
        "city": "Delhi",
        "aqi_value": 420,
        "aqi_category": "Severe",
        "dominant_pollutant": "PM2.5"
    },
    {
        "city": "Mumbai",
        "aqi_value": 180,
        "aqi_category": "Moderate",
        "dominant_pollutant": "PM10"
    },
    {
        "city": "Bengaluru",
        "aqi_value": 85,
        "aqi_category": "Satisfactory",
        "dominant_pollutant": "PM2.5"
    },
    {
        "city": "Hyderabad",
        "aqi_value": 45,
        "aqi_category": "Good",
        "dominant_pollutant": "PM10"
    }
]

for test in test_cases:

    advisory = generate_health_advisory(
        city=test["city"],
        aqi_value=test["aqi_value"],
        aqi_category=test["aqi_category"],
        dominant_pollutant=test["dominant_pollutant"],
        pollutant_breakdown_json=f'{{"{test["dominant_pollutant"]}":100}}',
        timestamp="2026-07-14 10:30",
        season="Summer",
        language_code="English"
    )

    print("=" * 50)
    print("City:", test["city"])
    print("AQI:", test["aqi_value"])


    if advisory.get("status") == "error":
        print("❌ Error:", advisory["message"])
    else:
        print("Headline:", advisory["summary"]["headline"])
        print("Risk Level:", advisory["summary"]["risk_level"])
        print("Mask:", advisory["mask_recommendation"]["type"])

    
    