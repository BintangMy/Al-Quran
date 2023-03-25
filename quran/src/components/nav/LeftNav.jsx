import { Link, useLocation } from "react-router-dom";
import React from "react";
import { FaQuran, FaCalendarAlt, FaPrayingHands } from "react-icons/fa";
import { GoBook } from "react-icons/go";

const LeftNav = () => {
  const { pathname } = useLocation();
  const activeStyle = {
    color: "#34d399",
  };

  return (
    <div className="hidden md:block md:fixed top-0 w-16 text-gray-700 min-h-screen">
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex flex-col space-y-5 items-center justify-between">
          <Link
            to="/"
            style={pathname === "/" ? activeStyle : {}}
            className="text-gray-500 p-2 border-2 border-transparent rounded-xl hover:text-emerald-500 transition duration-1000"
          >
            <FaQuran className="text-lg" />
          </Link>
          <Link
            to="/tafsir"
            style={pathname === "/tafsir" ? activeStyle : {}}
            className="text-gray-500 p-2 border-2 border-transparent rounded-xl hover:text-emerald-500 transition duration-1000"
          >
            <GoBook className="text-lg" />
          </Link>
          <Link
            to="/doa"
            style={pathname === "/doa" ? activeStyle : {}}
            className="text-gray-500 p-2 border-2 border-transparent rounded-xl hover:text-emerald-500 transition duration-1000"
          >
            <FaPrayingHands className="text-lg" />
          </Link>
          <Link
            to="/jadwal"
            style={pathname === "/jadwal" ? activeStyle : {}}
            className="text-gray-500 p-2 border-2 border-transparent rounded-xl hover:text-emerald-500 transition duration-1000"
          >
            <FaCalendarAlt className="text-lg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
