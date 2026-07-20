import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { demoForecast } from "../../data/demoData";

function ForecastCard() {
  const [forecast, setForecast] = useState(null);

  const fetchForecast = () => {
    axios
      .get("http://127.0.0.1:8000/forecast")
      .then((response) => {
        setForecast(response.data);
      })
      .catch(() => {
        console.log("Using demo forecast.");

        setForecast(demoForecast);
      });
  };

  useEffect(() => {
    fetchForecast();
  }, []);

  // Loading State
  if (!forecast) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300">

        <h3 className="text-xl font-bold text-blue-600">
          Loading Forecast...
        </h3>

      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300">

      {/* Header */}

      <div className="flex justify-between items-center">

        <h3 className="text-xl font-bold flex items-center gap-2">
          📈 AQI Forecast
        </h3>

        <Link
          to="/forecast"
          className="text-blue-600 font-semibold hover:text-blue-800 transition"
        >
          View Details →
        </Link>

      </div>

      {/* Forecast Cards */}

      <div className="grid grid-cols-3 gap-4 mt-6 text-center">

        <div className="bg-red-50 rounded-xl p-4">

          <p className="text-gray-500 text-sm">
            Today
          </p>

          <p className="text-3xl font-bold text-red-600 mt-2">
            {(forecast.forecast - 20).toFixed(2)}
          </p>

          <p className="mt-2 font-semibold text-red-600">
            🔴 Unhealthy
          </p>

        </div>

        <div className="bg-red-50 rounded-xl p-4">

          <p className="text-gray-500 text-sm">
            Tomorrow
          </p>

          <p className="text-3xl font-bold text-red-600 mt-2">
            {Number(forecast.forecast).toFixed(2)}
          </p>

          <p className="mt-2 font-semibold text-red-600">
            🔴 Unhealthy
          </p>

        </div>

        <div className="bg-red-50 rounded-xl p-4">

          <p className="text-gray-500 text-sm">
            Next Day
          </p>

          <p className="text-3xl font-bold text-red-600 mt-2">
            {(forecast.forecast - 10).toFixed(2)}
          </p>

          <p className="mt-2 font-semibold text-red-600">
            🔴 Unhealthy
          </p>

        </div>

      </div>

      {/* Trend */}

      <div className="mt-6 border-t pt-4">

        <h4 className="font-semibold text-gray-700">
          Trend
        </h4>

        <p className="mt-2 text-gray-600">
          ⬆ AQI is expected to increase tomorrow. Air quality will remain in the{" "}
          <span className="font-semibold text-red-600">
            Unhealthy
          </span>{" "}
          category.
        </p>

      </div>

    </div>
  );
}

export default ForecastCard;