function WeatherCard({ data }) {
  if (!data) return null;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300">

      <div className="flex justify-between items-center">

        <h3 className="text-xl font-bold flex items-center gap-2">
          🌤 Weather
        </h3>


        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
          ☁ Cloudy
        </span>

      </div>



      <div className="grid grid-cols-2 gap-5 mt-6">


        <div className="bg-gray-50 rounded-2xl p-4">

          <p className="text-gray-500 text-sm">
            🌡 Temperature
          </p>

          <p className="text-xl font-bold mt-2">
            {data.temperature}°C
          </p>

        </div>



        <div className="bg-gray-50 rounded-2xl p-4">

          <p className="text-gray-500 text-sm">
            💧 Humidity
          </p>

          <p className="text-xl font-bold mt-2">
            {data.humidity}%
          </p>

        </div>



        <div className="bg-gray-50 rounded-2xl p-4">

          <p className="text-gray-500 text-sm">
            🌬 Wind Speed
          </p>

          <p className="text-xl font-bold mt-2">
            12 km/h
          </p>

        </div>



        <div className="bg-gray-50 rounded-2xl p-4">

          <p className="text-gray-500 text-sm">
            👀 Visibility
          </p>

          <p className="text-xl font-bold mt-2">
            6 km
          </p>

        </div>



        <div className="bg-gray-50 rounded-2xl p-4">

          <p className="text-gray-500 text-sm">
            🌡 Pressure
          </p>

          <p className="text-xl font-bold mt-2">
            1008 hPa
          </p>

        </div>



        <div className="bg-gray-50 rounded-2xl p-4">

          <p className="text-gray-500 text-sm">
            🧪 Pollutant
          </p>

          <p className="text-xl font-bold mt-2">
            {data.pollutant}
          </p>

        </div>


      </div>


    </div>
  );
}

export default WeatherCard;