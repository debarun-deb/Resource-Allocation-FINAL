import React, { useState } from "react";
import { Home, Info, Layers, PhoneCall, LogOut } from "react-feather";

const Navbar = () => {
  const [activePage, setActivePage] = useState("Home");

  const handlePageClick = (pageName) => {
    setActivePage(pageName);
  };

  const NavItem = ({ name, icon }) => {
    const isActive = name === activePage;

    return (
      <li
        className={`${
          isActive
            ? "bg-green-500 text-white"
            : "text-green-500 hover:bg-green-200"
        } cursor-pointer py-2 px-4 rounded-lg transition flex-row flex gap-2`}
        onClick={() => handlePageClick(name)}
      >
        {icon} {name}
      </li>
    );
  };

  const LogoutButton = () => (
    <button
      className="text-red-500 hover:text-red-700 cursor-pointer"
      onClick={() => handlePageClick("Logout")}
    >
      <LogOut size={20} />
    </button>
  );

  return (
    <nav className="bg-gray-900 p-4">
      <div className="flex justify-between items-center">
        <div className="text-white">
          <p className="text-lg font-bold">
            <span className="text-yellow-300">{activePage}</span>
          </p>
        </div>
        <div className="flex-grow" /> {/* This element takes up remaining space */}
        <ul className="flex space-x-3">
          <NavItem name="Home" icon={<Home size={20} />} />
          <NavItem name="About" icon={<Info size={20} />} />
          <NavItem name="Services" icon={<Layers size={20} />} />
          <NavItem name="Contact" icon={<PhoneCall size={20} />} />
        </ul>
        <div className="flex items-center space-x-4 ml-2">
          {/* Place the logo for the logout button here */}
          {/* Example: <img src="logout-logo.png" alt="Logout" /> */}
          <LogoutButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;