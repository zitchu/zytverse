import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <nav>
        <ul className="cinzel-regular fixed z-10 flex flex-wrap justify-around w-full silver-bg backdrop-blur-sm h-[100px] md:h-[50px] p-1 ">
          <div className="absolute rounded-full silver-prego shadow-lg w-2 h-2 left-0 m-1 top-0" />
          <div className="absolute rounded-full silver-prego shadow-lg w-2 h-2 left-0 m-1 bottom-0" />
          <li>
            <button className="rounded-lg gold-button h-[70%] hover:shadow-md text-sm md:text-lg w-auto p-2 md:h-full transition-all duration-1000 ease-in-out">
              <Link to="/">Home</Link>
            </button>
          </li>
          <li>
            <button className="rounded-lg silver-button h-[70%]  transition-all duration-700 hover:shadow-md text-sm md:text-lg w-auto p-2 md:h-full">
              <Link to="/phandalim">Phandalim</Link>
            </button>
          </li>
          <li>
            <button className="rounded-lg silver-button h-[70%]   hover:shadow-md text-sm md:text-lg w-auto p-2 md:h-full">
              <Link to="/stk">STK</Link>
            </button>
          </li>
          <li>
            <button className="rounded-lg silver-button h-[70%]   hover:shadow-md text-sm md:text-lg w-auto p-2 md:h-full">
              <Link to="/tomb">Tomb</Link>
            </button>
          </li>
          <li>
            <button className="rounded-lg silver-button h-[70%]   hover:shadow-md text-sm md:text-lg w-auto p-2 md:h-full">
              <Link to="/dualidade">Dualidade</Link>
            </button>
          </li>
          <li>
            <button className="rounded-lg silver-button h-[70%]   hover:shadow-md text-sm md:text-lg w-auto p-2 md:h-full">
              <Link to="/tales">Fairy Tales</Link>
            </button>
          </li>
          <li>
            <button className="rounded-lg bronze-button h-[70%]   hover:shadow-md text-sm md:text-lg w-auto p-2 md:h-full">
              <Link to="/misc">Variados</Link>
            </button>
          </li>
          <div className="absolute rounded-full silver-prego shadow-inner w-2 h-2 right-0 m-1 top-0" />
          <div className="absolute rounded-full silver-prego shadow-inner w-2 h-2 right-0 m-1 bottom-0" />
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
