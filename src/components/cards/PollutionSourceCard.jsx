function PollutionSourceCard({ data }) {

  if (!data) return null;


  const icons = {
    "Vehicle Exhaust": "🚗",
    "Diesel Generators": "⚡",
    "Industrial Fuel Combustion": "🏭",
    "Construction Dust": "🏗️",
    "Road Dust": "🌫️",
    "Industrial Emissions": "🏭",
    "Biomass Burning": "🔥",
    "Traffic Congestion": "🚦",
    "Power Plants": "⚡",
    "Industrial Boilers": "🏭",
    "Coal Power Plants": "🏭",
    "Oil Refineries": "🛢️",
    "Heavy Industries": "🏭",
    "Photochemical Smog": "☀️",
    "Vehicle Emissions": "🚗",
    "Industrial VOCs": "🏭",
    "Agriculture": "🌾",
    "Livestock": "🐄",
    "Waste Disposal": "🗑️"
  };



  return (

     <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300">

    <h3 className="text-xl font-bold flex items-center gap-2 mb-6">
      🔍 Source Analysis
    </h3>

    <div className="mb-6">
      <p className="text-gray-500 text-sm">
        Dominant Pollutant
      </p>

    <div className="mt-2 inline-block px-4 py-2 rounded-full bg-red-100 text-red-700 font-semibold">
      🧪 {data.dominant_pollutant}
    </div>
    </div>

    <div className="mb-6">
      <h4 className="font-semibold text-gray-700 mb-3">
        Likely Sources
      </h4>

      <div className="space-y-2">
        {data.likely_sources.map((source) => (
          <div
            key={source}
            className="flex items-center gap-3 p-3 rounded-lg bg-gray-50"
          >
            <span className="text-xl">
              {icons[source] || "🌍"}
            </span>

            <span className="font-medium text-gray-700">
              {source}
            </span>
          </div>
      ))}
      </div>
  </div>

  <div className="border-t pt-4">
    <h4 className="font-semibold text-gray-700 mb-2">
      🤖 AI Explanation
    </h4>

    <p className="text-gray-600 leading-relaxed">
      {data.analysis}
    </p>
  </div>

</div>

  );

}


export default PollutionSourceCard;