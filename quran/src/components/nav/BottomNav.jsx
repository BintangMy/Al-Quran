import { Link, useLocation } from "react-router-dom";
import React from "react";
import { FaQuran, FaCalendarAlt, FaPrayingHands } from "react-icons/fa";
import { GoBook } from "react-icons/go";

const BottomNav = () => {
  const { pathname } = useLocation();
  const activeStyle = {
    color: "#34d399",
  };

  return (
    <div className="fixed bg-gray-900 bottom-0 z-50 bg-primary w-full h-16">
      <div className="flex items-center justify-around h-16 text-secondary">
        <Link to="/"
          style={pathname === "/" ? activeStyle : {}} activeClassName="text-emerald-500">
          <FaQuran />
        </Link>
        <Link
          to="/tafsir"
          style={pathname === "/tafsir" ? activeStyle : {}}
          activeClassName="text-emerald-500"
        >
          <GoBook />
        </Link>
        <Link
          to="/doa"
          style={pathname === "/doa" ? activeStyle : {}}
          activeClassName="text-emerald-500"
        >
          <FaPrayingHands />
        </Link>
        <Link
          to="/jadwal"
          style={pathname === "/jadwal" ? activeStyle : {}}
          activeClassName="text-emerald-500"
        >
          <FaCalendarAlt />
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
