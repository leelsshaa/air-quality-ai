import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function AQITrendChart({ currentAQI }) {
  const data = [
    { day: "Mon", aqi: currentAQI - 35 },
    { day: "Tue", aqi: currentAQI - 20 },
    { day: "Wed", aqi: currentAQI - 10 },
    { day: "Thu", aqi: currentAQI + 5 },
    { day: "Fri", aqi: currentAQI - 15 },
    { day: "Sat", aqi: currentAQI },
    { day: "Sun", aqi: currentAQI + 20 },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6">

      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">
          📈 AQI Trend (Last 7 Days)
        </h3>

        <span className="text-sm text-gray-500">
          Weekly Analysis
        </span>
      </div>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 20,
              left: 0,
              bottom: 0,
            }}
          >

            <CartesianGrid strokeDasharray="5 5" />

            <XAxis dataKey="day" />

            <YAxis domain={[100, 300]} />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="aqi"
              stroke="#2563eb"
              strokeWidth={4}
              dot={{ r: 6 }}
              activeDot={{ r: 8 }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default AQITrendChart;