function PollutionSourceCard({ data }) {

  if (!data) return null;


  const sources = [

    {
      name: "Traffic",
      value: data.traffic,
      icon: "🚗",
      color: "bg-red-500",
    },

    {
      name: "Construction",
      value: data.construction,
      icon: "🏗️",
      color: "bg-yellow-500",
    },

    {
      name: "Industry",
      value: data.industry,
      icon: "🏭",
      color: "bg-blue-500",
    },

  ];



  return (

    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300">


      <h3 className="text-xl font-bold flex items-center gap-2 mb-6">

        🏭 Pollution Sources

      </h3>





      <div className="space-y-6">



        {sources.map((source) => (

          <div key={source.name}>


            <div className="flex justify-between items-center mb-2">



              <div className="flex items-center gap-2">


                <span className="text-xl">

                  {source.icon}

                </span>



                <span className="font-semibold text-gray-700">

                  {source.name}

                </span>



              </div>





              <span className="font-bold text-gray-800">

                {source.value}%

              </span>



            </div>







            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">


              <div

                className={`${source.color} h-3 rounded-full transition-all duration-700`}

                style={{ width: `${source.value}%` }}

              ></div>


            </div>




          </div>


        ))}



      </div>




    </div>

  );

}


export default PollutionSourceCard;