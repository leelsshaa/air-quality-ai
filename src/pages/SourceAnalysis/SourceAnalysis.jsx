import Navbar from "../../components/layout/Navbar";

function SourceAnalysis() {
  const sources = [
    {
      name: "Traffic",
      percentage: 70,
      icon: "🚗",
      color: "bg-red-500",
      description: "Heavy traffic congestion is the largest contributor to PM2.5 emissions.",
    },
    {
      name: "Construction",
      percentage: 20,
      icon: "🏗️",
      color: "bg-yellow-500",
      description: "Construction dust contributes significantly to particulate pollution.",
    },
    {
      name: "Industry",
      percentage: 10,
      icon: "🏭",
      color: "bg-blue-500",
      description: "Industrial emissions contribute the remaining share of pollutants.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-8">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
  Source Analysis
</h2>

          <p className="mt-3 text-sm md:text-base text-gray-500">
            AI analysis of the major pollution sources affecting Chennai.
          </p>

        </div>

        {/* Source Cards */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {sources.map((source) => (
            <div
              key={source.name}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6"
            >
              <div className="flex items-center gap-3">

                <div className="text-4xl">
                  {source.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {source.name}
                  </h3>

                  <p className="text-gray-500">
                    Contribution
                  </p>
                </div>

              </div>

              {/* Percentage */}

              <div className="mt-6">

                <div className="flex justify-between mb-2">

                  <span className="font-semibold">
                    {source.percentage}%
                  </span>

                </div>

                <div className="w-full bg-gray-200 rounded-full h-4">

                  <div
                    className={`${source.color} h-4 rounded-full`}
                    style={{ width: `${source.percentage}%` }}
                  ></div>

                </div>

              </div>

              <p className="mt-6 text-gray-600 leading-7">
                {source.description}
              </p>

            </div>
          ))}

        </div>

        {/* Summary */}

        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 mt-8">

          <h3 className="text-2xl font-bold text-gray-800">
            Overall Analysis
          </h3>

          <p className="mt-4 text-gray-600 leading-8">
            AI analysis indicates that <strong>traffic emissions</strong> are the
            dominant contributor to poor air quality in Chennai, accounting for
            approximately <strong>70%</strong> of pollution. Construction
            activities contribute around <strong>20%</strong>, while industrial
            emissions account for the remaining <strong>10%</strong>.
          </p>

          <p className="mt-4 text-gray-600 leading-8">
            Reducing traffic congestion, controlling construction dust, and
            strengthening industrial emission monitoring can significantly improve
            urban air quality.
          </p>

        </div>

      </main>
    </div>
  );
}

export default SourceAnalysis;