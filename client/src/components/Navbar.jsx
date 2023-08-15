import React, { useState } from "react";
import { Home, XCircle, Book, LogOut } from "react-feather";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activePage, setActivePage] = useState("Home");

  const handlePageClick = (pageName) => {
    setActivePage(pageName);
  };

  const NavItem = ({ name, icon, path }) => {
    const isActive = name === activePage;

    return (
      <Link
        to={path}
        className={`${
          isActive
            ? "bg-green-500 text-white"
            : "text-green-500 hover:bg-green-200"
        } cursor-pointer py-2 px-4 rounded-lg transition flex-row flex gap-2`}
        onClick={() => handlePageClick(name)}
      >
        {icon} {name}
      </Link>
    );
  };

  const LogoutButton = () => (
    <Link
      to="/login"
      className="text-red-500 hover:text-red-700 cursor-pointer"
    >
      <LogOut size={20} />
    </Link>
  );

  return (
    <nav className="bg-[#09044f] p-4 sticky top-0">
      <div className="flex justify-between items-center">
        <div className="text-white">
          <p className="text-lg font-bold">
            <span className="text-[#D8C4B6] text-2xl">{activePage}</span>
          </p>
        </div>
        <div className="flex-grow" />{" "}
        {/* This element takes up remaining space */}
        <ul className="flex space-x-3">
          <NavItem name="Home" icon={<Home size={20} />} path="/home/" />
          <NavItem name="Bookings" icon={<Book size={20} />} path="/Bookings" />
          <NavItem
            name="Cancellations"
            icon={<XCircle size={20} />}
            path="/Cancellation"
          />
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
