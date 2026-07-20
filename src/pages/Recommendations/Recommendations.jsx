import Navbar from "../../components/layout/Navbar";

function Recommendations() {
  const recommendations = [
    {
      icon: "🚦",
      title: "Reduce Traffic Congestion",
      description:
        "Implement traffic management strategies during peak hours to reduce vehicle emissions.",
    },
    {
      icon: "🏗",
      title: "Control Construction Dust",
      description:
        "Ensure construction sites follow dust suppression measures such as water spraying and proper covering.",
    },
    {
      icon: "🏭",
      title: "Monitor Industrial Emissions",
      description:
        "Regularly inspect industries and enforce emission standards to minimize air pollution.",
    },
    {
      icon: "🌳",
      title: "Increase Green Cover",
      description:
        "Plant more trees and develop green belts in highly polluted areas to improve air quality.",
    },
    {
      icon: "🚌",
      title: "Promote Public Transport",
      description:
        "Encourage citizens to use buses, metro, and other public transportation to reduce private vehicle usage.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-50">

      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-8">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
  AI Recommendations
</h2>

          <p className="mt-3 text-sm md:text-base text-gray-500">
            Suggested actions to improve city air quality.
          </p>

        </div>

        {/* Recommendation Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {recommendations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6"
            >

              <div className="flex items-start gap-4">

                <div className="text-5xl">
                  {item.icon}
                </div>

                <div>

                  <h3 className="text-xl font-bold text-gray-800">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-gray-600">
                    {item.description}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </main>

    </div>
  );
}

export default Recommendations;