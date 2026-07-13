from generator import generate_health_advisory

advisory = generate_health_advisory(
    city="Chennai",
    aqi_value=310,
    aqi_category="Very Poor",
    dominant_pollutant="PM2.5",
    pollutant_breakdown_json='{"PM2.5":180}',
    timestamp="2026-07-13 10:30",
    season="Summer",
    language_code="English"
)

print(advisory["summary"]["headline"])
print(advisory["mask_recommendation"]["type"])
print(advisory["group_advisories"]["general_public"])