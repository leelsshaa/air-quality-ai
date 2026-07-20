# LLM Integration Guide

## Import

```python
from generator import generate_health_advisory
```

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

## Returns

Python Dictionary

Example:

```python
advisory["summary"]["headline"]
advisory["group_advisories"]["general_public"]
advisory["mask_recommendation"]["type"]
```

## Error Response

```python
{
    "status": "error",
    "message": "..."
}
```

## Dependencies

- google-generativeai
- python-dotenv

Install:

```bash
pip install -r requirements.txt
```