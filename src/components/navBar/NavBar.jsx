import React from "react";
import Links from "./links.jsx";
const NavBar = () => {
  return (
    <div className="flex justify-between py-5 px-20 bg-primary text-white">
      <div className="font-bold text-2xl">Elisha</div>
      <Links />
    </div>
  );
};

export default NavBar;
