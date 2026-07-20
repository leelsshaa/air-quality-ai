function AQICard({ data }) {
  if (!data) return null;

  const aqi = data.current_aqi;

  let status = "Good";
  let textColor = "text-green-600";
  let bgColor = "bg-green-100";
  let barColor = "bg-green-500";
  let healthImpact = "Air quality is satisfactory.";
  let emoji = "🟢";
  let risk = "Low";
  let range = "0 - 50";


  if (aqi > 300) {

    status = "Hazardous";
    textColor = "text-purple-700";
    bgColor = "bg-purple-100";
    barColor = "bg-purple-600";
    emoji = "🟣";
    risk = "Severe";
    range = "301 - 500";

    healthImpact =
      "Serious health effects for everyone. Avoid outdoor activities.";

  } 
  
  else if (aqi > 200) {

    status = "Unhealthy";
    textColor = "text-red-600";
    bgColor = "bg-red-100";
    barColor = "bg-red-500";
    emoji = "🔴";
    risk = "High";
    range = "201 - 300";

    healthImpact =
      "Sensitive groups may experience health effects. Reduce outdoor exposure.";

  } 
  
  else if (aqi > 100) {

    status = "Moderate";
    textColor = "text-orange-600";
    bgColor = "bg-orange-100";
    barColor = "bg-orange-500";
    emoji = "🟠";
    risk = "Medium";
    range = "101 - 200";

    healthImpact =
      "Air quality is acceptable but may affect sensitive people.";

  } 
  
  else if (aqi > 50) {

    status = "Satisfactory";
    textColor = "text-yellow-600";
    bgColor = "bg-yellow-100";
    barColor = "bg-yellow-500";
    emoji = "🟡";
    risk = "Low";
    range = "51 - 100";

    healthImpact =
      "Minor breathing discomfort for sensitive individuals.";
  }



  const percentage = Math.min((aqi / 500) * 100,100);



  return (

    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300">


      {/* Header */}

      <div className="flex justify-between items-center">


        <h3 className="text-xl font-bold flex items-center gap-2">
          🌫 Current AQI
        </h3>


        <span
          className={`px-4 py-2 rounded-full text-sm font-bold ${bgColor} ${textColor}`}
        >

          {emoji} {status} Air Quality

        </span>


      </div>




      {/* AQI Number */}


      <div className="mt-6 flex items-end gap-3">

        <h1 className={`text-6xl font-bold ${textColor}`}>
          {aqi}
        </h1>


        <span className="text-gray-500 mb-2">
          AQI
        </span>

      </div>





      {/* AQI Progress */}


      <div className="mt-8">


        <div className="flex justify-between">

          <p className="font-semibold text-gray-700">
            AQI Level
          </p>


          <p className={`font-bold ${textColor}`}>
            {aqi} / 500
          </p>


        </div>



        <div className="w-full bg-gray-200 rounded-full h-5 mt-3 overflow-hidden">


          <div
            className={`${barColor} h-5 rounded-full transition-all duration-1000`}
            style={{
              width:`${percentage}%`
            }}
          >

          </div>


        </div>




        <div className="flex justify-between text-xs text-gray-500 mt-2">

          <span>Good</span>

          <span>Moderate</span>

          <span>Unhealthy</span>

          <span>Hazardous</span>

        </div>



      </div>





      {/* Risk Details */}


      <div className="grid grid-cols-2 gap-6 mt-8">


        <div>


          <p className="text-gray-500 text-sm">
            Health Risk
          </p>


          <div
            className={`mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-full ${bgColor} ${textColor} font-bold`}
          >

            {emoji} {risk} Risk

          </div>


        </div>





        <div>


          <p className="text-gray-500 text-sm">
            AQI Range
          </p>


          <p className="mt-3 font-bold text-gray-700">
            {range}
          </p>


        </div>



      </div>





      {/* Pollutant Badge */}


      <div className="mt-8">


        <p className="text-gray-500 text-sm">
          🧪 Dominant Pollutant
        </p>


        <div className="mt-3 bg-purple-50 rounded-xl p-4">


          <p className="text-xl font-bold text-purple-700">
            {data.pollutant}
          </p>


          <p className="text-sm text-purple-500">
            High Risk Pollutant
          </p>


        </div>


      </div>





      {/* Sensitive Groups */}


      <div className="mt-6 bg-red-50 rounded-xl p-4">


        <h4 className="font-bold text-red-600">
          Sensitive Groups
        </h4>


        <ul className="mt-2 text-gray-700 space-y-1">

          <li>👶 Children</li>

          <li>👴 Elderly people</li>

          <li>🫁 Respiratory patients</li>

        </ul>


      </div>






      {/* Health Impact */}


      <div className="mt-6 border-t pt-5">


        <h4 className="font-semibold text-gray-700">
          Health Impact
        </h4>


        <p className="text-gray-600 mt-2 leading-7">
          {healthImpact}
        </p>


      </div>



    </div>

  );

}


export default AQICard;