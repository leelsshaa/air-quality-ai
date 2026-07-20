import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function PollutantChart() {
  const data = [
    { pollutant: "PM2.5", value: 220 },
    { pollutant: "PM10", value: 180 },
    { pollutant: "NO₂", value: 95 },
    { pollutant: "SO₂", value: 40 },
    { pollutant: "CO", value: 60 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      <h3 className="text-xl font-semibold mb-4">
        Pollutant Levels
      </h3>

      <div style={{ width: "100%", height: 350 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="pollutant" />
            <YAxis />
            <Tooltip />

            <Bar
              dataKey="value"
              fill="#2563eb"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default PollutantChart;