import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";


function ForecastChart({ value }) {

  const data = [
    {
      day: "Today",
      AQI: value - 20,
    },
    {
      day: "Tomorrow",
      AQI: value,
    },
    {
      day: "Next Day",
      AQI: value - 10,
    },
  ];


  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">

      <h3 className="text-xl font-semibold mb-4">
        AQI Trend
      </h3>


      <div style={{ width: "100%", height: 300 }}>

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="AQI"
              stroke="#2563eb"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>


    </div>
  );
}


export default ForecastChart;