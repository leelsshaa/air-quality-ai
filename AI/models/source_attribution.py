def get_pollution_source(pm25, pm10, no2, so2, co):

    # Default confidence scores
    traffic = 20
    industry = 20
    construction = 20
    domestic = 20
    natural = 20

    # Reasons dictionary
    reasons = {}

    # Traffic pollution
    if no2 > 40 or co > 2:
        traffic += 50
        reasons["Traffic"] = "High NO₂ and CO indicate heavy vehicle emissions."

    # Construction dust
    if pm10 > 150:
        construction += 40
        reasons["Construction"] = "High PM10 indicates dust from construction activities."

    # Industrial emissions
    if so2 > 30:
        industry += 50
        reasons["Industry"] = "High SO₂ indicates industrial emissions."

    # Fine particulate matter
    if pm25 > 100:
        traffic += 10
        industry += 10

    total = traffic + industry + construction + domestic + natural

    return {
        "Traffic": {
            "confidence": round(traffic / total * 100),
            "reason": reasons.get(
                "Traffic",
                "Normal vehicle emission levels."
            )
        },

        "Construction": {
            "confidence": round(construction / total * 100),
            "reason": reasons.get(
                "Construction",
                "Construction-related dust is within normal limits."
            )
        },

        "Industry": {
            "confidence": round(industry / total * 100),
            "reason": reasons.get(
                "Industry",
                "Industrial emissions are within normal limits."
            )
        },

        "Domestic": {
            "confidence": round(domestic / total * 100),
            "reason": "Pollution from household activities such as cooking and waste burning."
        },

        "Natural": {
            "confidence": round(natural / total * 100),
            "reason": "Natural factors such as dust, pollen, and weather conditions."
        }
    }