import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HealthCard() {

  const [advice, setAdvice] = useState(
    "Air quality is unhealthy. Wear an N95 mask."
  );

  const [loading, setLoading] = useState(true);


  useEffect(() => {

    axios
      .post("http://127.0.0.1:8000/health-advisory", {
        aqi: 220,
      })
      .then((response) => {

        if (response.data?.advisory) {
          setAdvice(response.data.advisory);
        }

        setLoading(false);

      })
      .catch((error) => {

        console.log(
          "Using demo health advisory data:",
          error
        );

        // Demo fallback
        setAdvice(
          "Air quality is unhealthy. Wear an N95 mask and avoid prolonged outdoor exposure."
        );

        setLoading(false);

      });


  }, []);



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


        <span className="
          inline-block 
          mt-2 
          px-4 
          py-2 
          rounded-full 
          bg-red-100 
          text-red-700 
          font-semibold
        ">
          ⚠ Unhealthy Air Quality
        </span>


      </div>




      <div className="mt-6">


        <h4 className="font-semibold text-gray-700">
          AI Recommendation
        </h4>


        <p className="mt-2 text-gray-600">


          {loading
            ? "Generating AI recommendation..."
            : advice
          }


        </p>


      </div>





      <div className="mt-6 border-t pt-4">


        <h4 className="font-semibold text-gray-700">
          Safety Tips
        </h4>



        <ul className="mt-3 space-y-2 text-gray-600">


          <li>
            ✔ Wear an N95 mask
          </li>


          <li>
            ✔ Avoid outdoor exercise
          </li>


          <li>
            ✔ Keep windows closed
          </li>


          <li>
            ✔ Stay hydrated
          </li>


          <li>
            ✔ Sensitive groups should stay indoors
          </li>


        </ul>


      </div>



    </div>

  );

}


export default HealthCard;