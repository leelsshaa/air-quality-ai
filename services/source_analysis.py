def analyze_pollution_sources(pollution):

    dominant = max(pollution, key=pollution.get)

    mapping = {

        "PM2.5": {
            "sources": [
                "Construction Dust",
                "Road Dust",
                "Industrial Emissions",
                "Biomass Burning"
            ],
            "reason":
                "Fine particulate matter suggests dust, combustion and industrial activities."
        },

        "PM10": {
            "sources": [
                "Construction Activities",
                "Road Dust",
                "Mining Operations"
            ],
            "reason":
                "Large suspended particles usually originate from dust and construction."
        },

        "CO": {
            "sources": [
                "Vehicle Exhaust",
                "Diesel Generators",
                "Industrial Fuel Combustion"
            ],
            "reason":
                "High carbon monoxide indicates incomplete combustion of fuels."
        },

        "NO2": {
            "sources": [
                "Traffic Congestion",
                "Power Plants",
                "Industrial Boilers"
            ],
            "reason":
                "Nitrogen dioxide mainly comes from vehicle and industrial emissions."
        },

        "SO2": {
            "sources": [
                "Coal Power Plants",
                "Oil Refineries",
                "Heavy Industries"
            ],
            "reason":
                "Sulfur dioxide is commonly emitted during fossil fuel combustion."
        },

        "O3": {
            "sources": [
                "Photochemical Smog",
                "Vehicle Emissions",
                "Industrial VOCs"
            ],
            "reason":
                "Ground-level ozone forms through reactions involving sunlight and pollutants."
        },

        "NH3": {
            "sources": [
                "Agriculture",
                "Livestock",
                "Waste Disposal"
            ],
            "reason":
                "Ammonia is generally associated with farming and waste emissions."
        },

        "NO": {
            "sources": [
                "Vehicle Exhaust",
                "Industrial Combustion"
            ],
            "reason":
                "Nitric oxide is mainly released during high-temperature fuel combustion."
        }

    }

    info = mapping.get(
        dominant,
        {
            "sources": ["Unknown"],
            "reason": "No analysis available."
        }
    )

    return {
        "dominant_pollutant": dominant,
        "likely_sources": info["sources"],
        "analysis": info["reason"]
    }