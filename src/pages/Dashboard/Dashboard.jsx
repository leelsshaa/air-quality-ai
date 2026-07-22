import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../../components/layout/Navbar";

import StatsCard from "../../components/cards/StatsCard";
import AQICard from "../../components/cards/AQICard";
import WeatherCard from "../../components/cards/WeatherCard";
import ForecastCard from "../../components/cards/ForecastCard";
import HealthCard from "../../components/cards/HealthCard";
import PollutionSourceCard from "../../components/cards/PollutionSourceCard";
import AQITrendChart from "../../components/charts/AQITrendChart";


function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [city, setCity] = useState("Chennai");

 const fetchDashboardData = () => {
  setLoading(true);
  setError("");

  axios
    .get(`http://127.0.0.1:8000/dashboard?city=${city}`)
    .then((response) => {
      setDashboardData(response.data);
      setLoading(false);
    })
    .catch(() => {
      setError("Unable to fetch dashboard data.");
      setLoading(false);
    });
};

  useEffect(() => {
    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-100 via-white to-blue-50">

        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

        <h2 className="mt-6 text-2xl font-bold text-gray-800">
          Loading Dashboard...
        </h2>

        <p className="mt-2 text-gray-500">
          Fetching latest air quality data...
        </p>

      </div>
    );
  }


  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-slate-100 via-white to-blue-50">

        <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-md">

          <div className="text-6xl mb-4">⚠️</div>

          <h2 className="text-2xl font-bold text-red-600">
            Unable to Load Dashboard
          </h2>

          <p className="mt-4 text-gray-600">
            Please make sure your backend server is running.
          </p>

          <button
            onClick={fetchDashboardData}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Retry
          </button>

        </div>

      </div>
    );
  }


  if (!dashboardData) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-slate-100 via-white to-blue-50">

        <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-md">

          <div className="text-6xl mb-4">📭</div>

          <h2 className="text-2xl font-bold text-gray-800">
            No Data Available
          </h2>

          <p className="mt-4 text-gray-600">
            We couldn't find any air quality information.
          </p>

          <button
            onClick={fetchDashboardData}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Refresh
          </button>

        </div>

      </div>
    );
  }


  const aqi = dashboardData.current_aqi;

  let aqiColor = "text-green-500";

  if (aqi > 300) {
    aqiColor = "text-purple-600";
  } else if (aqi > 200) {
    aqiColor = "text-red-500";
  } else if (aqi > 100) {
    aqiColor = "text-orange-500";
  } else if (aqi > 50) {
    aqiColor = "text-yellow-500";
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-50">

      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">


        {/* Heading */}

        <div className="mb-8">
          

          {/* UPDATED HEADING STYLE */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Dashboard
          </h2>

          <p className="text-base md:text-lg text-blue-600 font-semibold mt-1">
            📍 {dashboardData.city}
          </p>

          <p className="mt-3 text-sm md:text-base text-gray-500">
            AI-Powered Urban Air Quality Intelligence Dashboard
          </p>

        </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">

          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city..."
            className="flex-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={fetchDashboardData}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
        >
         Search
        </button>

      </div>

        {/* Summary Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6">

          <StatsCard
            title="Predicted AQI"
            value={dashboardData.prediction}
            icon="🤖"
            color="text-indigo-600"
            bgColor="bg-indigo-50"
          />

          <StatsCard
            title="Current AQI"
            value={dashboardData.current_aqi}
            icon="🌫"
            color={aqiColor}
            bgColor="bg-red-50"
          />

          <StatsCard
            title="AQI Category"
            value={dashboardData.aqi_category}
            icon="🚦"
            color={aqiColor}
            bgColor="bg-red-50"
          />

          <StatsCard
            title="Temperature"
            value={`${dashboardData.temperature}°C`}
            icon="🌡"
            color="text-orange-500"
            bgColor="bg-orange-50"
          />

          <StatsCard
            title="Humidity"
            value={`${dashboardData.humidity}%`}
            icon="💧"
            color="text-blue-500"
            bgColor="bg-blue-50"
          />

          <StatsCard
            title="Pollutant"
            value={dashboardData.pollutant}
            icon="🧪"
            color="text-purple-500"
            bgColor="bg-purple-50"
          />

        </div> 
        {/* AQI + Weather */}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8 items-start">

          <AQICard data={dashboardData} />

          <WeatherCard data={dashboardData} />

        </div>


        {/* AQI Trend Chart */}

        <div className="mt-8">

          <AQITrendChart 
            currentAQI={dashboardData.current_aqi} 
          />

        </div>


        {/* Forecast + Health */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 items-start">

          <ForecastCard />

          <HealthCard
            advice={dashboardData.health_advisory}
            aqi={dashboardData.current_aqi}
          />

        </div>


        {/* Pollution Sources */}

        <div className="mt-8">

          <PollutionSourceCard
            data={dashboardData?.source_analysis}
          />

        </div>


      </main>

    </div>
  );
}


export default Dashboard;