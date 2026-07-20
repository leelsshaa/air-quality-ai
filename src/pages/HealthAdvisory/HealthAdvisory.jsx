import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../../components/layout/Navbar";
import { demoHealthAdvisory } from "../../data/demoData";

function HealthAdvisory() {
  const [advisory, setAdvisory] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchHealthAdvisory = () => {
    setLoading(true);

    axios
      .post("http://127.0.0.1:8000/health-advisory", {
        aqi: 220,
      })
      .then((response) => {
        setAdvisory(response.data.advisory);
        setLoading(false);
      })
      .catch(() => {
        console.log("Backend unavailable. Using demo advisory.");

        setAdvisory(demoHealthAdvisory.advisory);

        setLoading(false);
      });
  };

  useEffect(() => {
    fetchHealthAdvisory();
  }, []);

  // Loading UI

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-100 via-white to-blue-50">

        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

        <h2 className="mt-6 text-2xl font-bold text-gray-800">
          Loading Health Advisory...
        </h2>

        <p className="mt-2 text-gray-500">
          Generating AI health recommendations...
        </p>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-50">

      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
  Health Advisory
</h2>

          <p className="mt-3 text-sm md:text-base text-gray-500">
            AI-generated health recommendations based on the current AQI.
          </p>

        </div>

        {/* Advisory Card */}

        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-8">

          <div className="flex items-center gap-3">

            <span className="text-5xl">
              🩺
            </span>

            <h3 className="text-2xl font-bold">
              AI Health Advisory
            </h3>

          </div>

          <div className="mt-8">

            <h4 className="font-semibold text-lg text-blue-600">
              Current Recommendation
            </h4>

            <p className="mt-4 text-lg leading-8 text-gray-700">
              {advisory}
            </p>

          </div>

          {/* Safety Tips */}

          <div className="mt-8 border-t pt-6">

            <h4 className="text-xl font-bold mb-5">
              ✔ Safety Tips
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div className="bg-blue-50 rounded-xl p-4">
                😷 Wear an N95 Mask
              </div>

              <div className="bg-orange-50 rounded-xl p-4">
                🚶 Avoid Outdoor Exercise
              </div>

              <div className="bg-green-50 rounded-xl p-4">
                🪟 Keep Windows Closed
              </div>

              <div className="bg-red-50 rounded-xl p-4">
                🏠 Sensitive Groups Stay Indoors
              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default HealthAdvisory;