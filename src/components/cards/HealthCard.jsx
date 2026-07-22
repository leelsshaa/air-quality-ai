import { Link } from "react-router-dom";

function HealthCard({ advice, aqi }) {



  return (

    <div className="
      bg-white 
      rounded-2xl 
      shadow-lg 
      p-6 
      hover:shadow-2xl 
      hover:-translate-y-1 
      transition 
      duration-300
    ">


      <div className="flex justify-between items-center">


        <h3 className="text-xl font-bold flex items-center gap-2">
          🩺 Health Advisory
        </h3>


        <Link
          to="/health-advisory"
          className="
            text-blue-600 
            font-semibold 
            hover:text-blue-800 
            transition
          "
        >
          View Details →
        </Link>


      </div>



      <div className="mt-6">


        <p className="text-gray-500 text-sm">
          Current Status
        </p>


        

      <span
        className={`
          inline-block
          mt-2
          px-4
          py-2
          rounded-full
          font-semibold
          ${
            aqi <= 50
            ? "bg-green-100 text-green-700"
            : aqi <= 100
            ? "bg-yellow-100 text-yellow-700"
            : aqi <= 200
            ? "bg-orange-100 text-orange-700"
            : aqi <= 300
            ? "bg-red-100 text-red-700"
            : "bg-purple-100 text-purple-700"
          }
        `}  
      >
        {aqi <= 50
          ? "🟢 Good Air Quality"
          : aqi <= 100
          ? "🟡 Moderate Air Quality"
          : aqi <= 200
          ? "🟠 Poor Air Quality"
          : aqi <= 300
          ? "🔴 Very Poor Air Quality"
          : "🟣 Severe Air Quality"}
      </span>


      </div>




      <div className="mt-6">


        <h4 className="font-semibold text-gray-700">
          AI Recommendation
        </h4>

      <p className="mt-2 text-gray-600">
         {advice || "No health advisory available."}
      </p>


      </div>





      <div className="mt-6 border-t pt-4">


        <h4 className="font-semibold text-gray-700">
          Safety Tips
        </h4>



        <ul className="mt-3 space-y-2 text-gray-600">
          {aqi <= 50 ? (
            <>
              <li>✔ Enjoy outdoor activities</li>
              <li>✔ Keep monitoring local air quality</li>
              <li>✔ Stay hydrated</li>
            </>
          ) : aqi <= 100 ? (
            <>
              <li>✔ Sensitive people should limit prolonged outdoor exposure</li>
              <li>✔ Drink plenty of water</li>
              <li>✔ Monitor symptoms if you have asthma</li>
            </>
          ) : aqi <= 200 ? (
            <>
              <li>✔ Wear a mask if outdoors for long periods</li>
              <li>✔ Reduce strenuous outdoor exercise</li>
              <li>✔ Keep indoor air clean</li>
            </>
          ) : (
            <>
              <li>✔ Wear an N95 mask</li>
              <li>✔ Avoid outdoor exercise</li>
              <li>✔ Keep windows closed</li>
              <li>✔ Stay hydrated</li>
              <li>✔ Sensitive groups should stay indoors</li>
            </>
          )}
        </ul>


      </div>



    </div>

  );

}


export default HealthCard;