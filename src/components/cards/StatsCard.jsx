function StatsCard({ title, value, icon, color, bgColor }) {
  return (
    <div
      className={`${bgColor} rounded-2xl shadow-lg p-5 hover:shadow-2xl hover:-translate-y-1 transition duration-300`}
    >

      <div className="flex items-center gap-3">

        <div className="text-3xl">
          {icon}
        </div>


        <div>

          <p className="text-gray-500 text-sm">
            {title}
          </p>


          <h2 className={`text-2xl font-bold mt-1 ${color}`}>
            {value}
          </h2>


        </div>


      </div>


    </div>
  );
}

export default StatsCard;