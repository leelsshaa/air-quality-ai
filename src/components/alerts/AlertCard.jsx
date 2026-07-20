function AlertCard({ data }) {
  if (!data) return null;

  let message = "";
  let advice = "";

  if (data.aqi > 200) {
    message = "AQI is currently in the Unhealthy range.";
    advice = "Avoid prolonged outdoor activities and wear an N95 mask.";
  } else if (data.aqi > 100) {
    message = "AQI is Moderate.";
    advice = "Reduce outdoor activities if you are sensitive.";
  } else {
    message = "Air quality is Good.";
    advice = "Enjoy your outdoor activities.";
  }

  return (
    <div className="bg-red-100 border border-red-400 text-red-700 rounded-lg p-4">
      <h3 className="text-lg font-bold">
        ⚠️ Air Quality Alert
      </h3>

      <p className="mt-2">{message}</p>

      <p className="mt-1">{advice}</p>
    </div>
  );
}

export default AlertCard;