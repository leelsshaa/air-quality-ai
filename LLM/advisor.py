def generate_health_advice(aqi):

    if aqi > 200:
        return "Air quality is unhealthy. Wear an N95 mask."

    elif aqi > 100:
        return "Air quality is moderate. Reduce outdoor activities."

    else:
        return "Air quality is good."