import Navbar from "../../components/layout/Navbar";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

function AQIMap() {
  const hotspots = [
    {
      name: "Anna Nagar",
      position: [13.0878, 80.2101],
      level: "High",
      color: "🔴",
    },
    {
      name: "Guindy",
      position: [13.0067, 80.2206],
      level: "Moderate",
      color: "🟠",
    },
    {
      name: "Velachery",
      position: [12.9791, 80.2209],
      level: "Low",
      color: "🟡",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-50">

      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-8">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
  AQI Map
</h2>

          <p className="mt-3 text-sm md:text-base text-gray-500">
            Explore pollution hotspots across Chennai.
          </p>

        </div>

        {/* Map */}

        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-4">

          <MapContainer
            center={[13.0827, 80.2707]}
            zoom={11}
            style={{
              height: "500px",
              width: "100%",
              borderRadius: "16px",
            }}
          >

            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {hotspots.map((spot) => (
              <Marker
                key={spot.name}
                position={spot.position}
              >
                <Popup>

                  <div className="text-center">

                    <h3 className="font-bold">
                      {spot.name}
                    </h3>

                    <p className="mt-2">
                      {spot.color} {spot.level} Pollution
                    </p>

                  </div>

                </Popup>
              </Marker>
            ))}

          </MapContainer>

        </div>

        {/* Legend */}

        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 mt-8">

          <h3 className="text-2xl font-bold mb-6">
            🗺 Map Legend
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            <div className="bg-red-50 rounded-xl p-5 text-center">

              <div className="text-4xl">
                🔴
              </div>

              <h4 className="font-bold mt-2">
                High
              </h4>

              <p className="text-gray-500">
                Severe Pollution
              </p>

            </div>

            <div className="bg-orange-50 rounded-xl p-5 text-center">

              <div className="text-4xl">
                🟠
              </div>

              <h4 className="font-bold mt-2">
                Moderate
              </h4>

              <p className="text-gray-500">
                Moderate Pollution
              </p>

            </div>

            <div className="bg-yellow-50 rounded-xl p-5 text-center">

              <div className="text-4xl">
                🟡
              </div>

              <h4 className="font-bold mt-2">
                Low
              </h4>

              <p className="text-gray-500">
                Low Pollution
              </p>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default AQIMap;