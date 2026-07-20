import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {

  const [open, setOpen] = useState(false);


  const navLinkClass = ({ isActive }) =>
    isActive
      ? "bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold shadow-md"
      :
      "px-4 py-2 rounded-lg text-white hover:bg-blue-500 hover:text-yellow-300 transition font-medium";


  return (

    <nav className="bg-blue-600 text-white p-5 shadow-lg">


      <div className="flex justify-between items-center">


        <h1 className="text-xl md:text-3xl font-bold">
          AI-Powered Urban Air Quality Intelligence
        </h1>


        {/* Mobile Menu Button */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl"
        >
          ☰
        </button>


      </div>



      <ul
        className={`
        ${open ? "flex" : "hidden"}
        md:flex
        flex-col
        md:flex-row
        gap-3
        mt-5
        `}
      >


        <li>
          <NavLink to="/" className={navLinkClass}>
            Dashboard
          </NavLink>
        </li>


        <li>
          <NavLink to="/map" className={navLinkClass}>
            Map
          </NavLink>
        </li>


        <li>
          <NavLink to="/forecast" className={navLinkClass}>
            Forecast
          </NavLink>
        </li>


        <li>
          <NavLink to="/source-analysis" className={navLinkClass}>
            Source Analysis
          </NavLink>
        </li>


        <li>
          <NavLink to="/recommendations" className={navLinkClass}>
            Recommendations
          </NavLink>
        </li>


        <li>
          <NavLink to="/health-advisory" className={navLinkClass}>
            Health Advisory
          </NavLink>
        </li>


      </ul>


    </nav>

  );
}


export default Navbar;