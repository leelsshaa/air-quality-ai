# LLM Health Advisory Module

## Description

This module generates air quality health advisories using Google's Gemini API based on AQI data.

---

## Function

```python
generate_health_advisory(
    city,
    aqi_value,
    aqi_category,
    dominant_pollutant,
    pollutant_breakdown_json,
    timestamp,
    season,
    language_code
)
```

---

## Input Parameters

| Parameter | Description |
|-----------|-------------|
| city | Name of the city |
| aqi_value | AQI value |
| aqi_category | AQI category (Good, Moderate, Poor, etc.) |
| dominant_pollutant | Main pollutant |
| pollutant_breakdown_json | Pollutant values in JSON format |
| timestamp | Current date and time |
| season | Current season |
| language_code | Output language |

---

## Returns

A Python dictionary containing:

- Summary
- Group Advisories
- Precautionary Actions
- Medical Attention Trigger
- Mask Recommendation
- Outdoor Activity Recommendation
- Metadata

---

## Dependencies

- google-generativeai
- python-dotenv

Install using:

```bash
pip install -r requirements.txt
```

---

## Example

```python
from generator import generate_health_advisory

advisory = generate_health_advisory(...)
```