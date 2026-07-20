import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../../components/layout/Navbar";
import ForecastChart from "../../components/charts/ForecastChart";
import { demoForecast } from "../../data/demoData";

function Forecast() {
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchForecast = () => {
    setLoading(true);

    axios
      .get("http://127.0.0.1:8000/forecast")
      .then((response) => {
        setForecast(response.data);
        setLoading(false);
      })
      .catch(() => {
        console.log("Backend unavailable. Loading demo forecast...");

        setForecast(demoForecast);

        setLoading(false);
      });
  };

  useEffect(() => {
    fetchForecast();
  }, []);

  // Loading Screen
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-100 via-white to-blue-50">

        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

        <h2 className="mt-6 text-2xl font-bold text-gray-800">
          Loading Forecast...
        </h2>

        <p className="mt-2 text-gray-500">
          Fetching latest AQI prediction...
        </p>

      </div>
    );
  }

  // No Data Screen
  if (!forecast) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-slate-100 via-white to-blue-50">

        <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-md">

          <div className="text-6xl mb-4">
            📭
          </div>

          <h2 className="text-2xl font-bold text-gray-800">
            No Forecast Available
          </h2>

          <p className="mt-4 text-gray-600">
            Forecast data is currently unavailable.
          </p>

          <button
            onClick={fetchForecast}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Refresh
          </button>

        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-50">

      <Navbar />

      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">

        {/* Heading */}

        <div className="mb-8">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
  AQI Forecast
</h2>

          <p className="mt-3 text-gray-500">
            Predicted Air Quality Index for the upcoming days.
          </p>

        </div>

        {/* Forecast Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 text-center">

            <h3 className="text-lg font-semibold">
              Today
            </h3>

            <p className="text-4xl font-bold text-green-600 mt-4 break-words">
              {(forecast.forecast - 20).toFixed(2)}
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 text-center">

            <h3 className="text-lg font-semibold">
              Tomorrow
            </h3>

            <p className="text-4xl font-bold text-blue-600 mt-4 break-words">
              {Number(forecast.forecast).toFixed(2)}
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 text-center">

            <h3 className="text-lg font-semibold">
              Next Day
            </h3>

            <p className="text-4xl font-bold text-yellow-600 mt-4 break-words">
              {(forecast.forecast - 10).toFixed(2)}
            </p>

          </div>

        </div>

        {/* AQI Trend Chart */}

        <ForecastChart value={forecast.forecast} />

        {/* Forecast Summary */}

        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 mt-8">

          <h3 className="text-xl font-semibold">
            Forecast Summary
          </h3>

          <p className="mt-4 text-gray-700">
            Tomorrow's AQI is expected to rise to
            <span className="font-bold text-red-500">
              {" "}
              {Number(forecast.forecast).toFixed(2)}
            </span>.
          </p>

          <p className="mt-2 text-gray-600">
            Air quality is expected to remain in the
            <span className="font-semibold">
              {" "}Unhealthy
            </span>{" "}
            category.
          </p>

          <p className="mt-2 text-gray-600">
            Outdoor activities should be limited and wearing an N95 mask is recommended.
          </p>

        </div>

      </main>

    </div>
  );
}

export default Forecast;