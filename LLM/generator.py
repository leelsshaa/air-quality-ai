import os
import json 
from string import Template
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")

genai.configure(api_key=api_key)

model = genai.GenerativeModel("gemini-2.5-flash")


def generate_health_advisory(
    city,
    aqi_value,
    aqi_category,
    dominant_pollutant,
    pollutant_breakdown_json,
    timestamp,
    season,
    language_code
):
    
    # Prompt file path
    prompt_path = os.path.join(
        os.path.dirname(__file__),
        "prompts",
        "advisory_prompt.txt"
    )
    
    # Read prompt template
    with open(prompt_path, "r", encoding="utf-8") as file:
        template = Template(file.read())

    # Replace placeholders
    prompt = template.substitute(
        city=city,
        aqi_value=aqi_value,
        aqi_category=aqi_category,
        dominant_pollutant=dominant_pollutant,
        pollutant_breakdown_json=pollutant_breakdown_json,
        timestamp=timestamp,
        season=season,
        language_code=language_code
    )

    # Generate advisory and parse JSON response
    try:
        response = model.generate_content(prompt)
        return json.loads(response.text)

    except Exception as e:
        return {
            "status": "error",
            "message": str(e)
        }
