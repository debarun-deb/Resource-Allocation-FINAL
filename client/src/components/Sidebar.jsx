import React, { useState } from "react";
import { BsArrowLeftShort, BsFillJournalBookmarkFill } from "react-icons/bs";
import { MdDashboard, MdFreeCancellation } from "react-icons/md"
import { RiLogoutBoxRFill } from "react-icons/ri" 
import { Link } from "react-router-dom";
import logo from '../assets/png-transparent-manipal-academy-of-higher-education-sikkim-manipal-university-sikkim-manipal-institute-of-technology-manipal-university-jaipur-student-text-people-logo.png'

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex float-left">
      <div>
        <div
          className={`bg-[#0B2447] h-screen text-white p-5 pt-8 duration-500 relative ${!open ? "w-72" : "w-20"
            }`}
        >
          <BsArrowLeftShort
            className={`bg-white text-black cursor-pointer text-3xl rounded-full absolute -right-3 top-9 border border-black ${open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="inline-flex mb-6">
            <img className={`w-10 cursor-pointer ${!open && "p-0 w-10"}`} src={logo} alt="" />
            <h1 className={`font-medium origin uppercase text-l mt-2 ml-2 ${open && "hidden"}`}>Resource Allocation</h1>
          </div>

          <ul className="pt-2">
            <li className="text-gray-300 text-sm flex items-center gap-x-4 p-2 hover:bg-slate-300/50 rounded-md mt-2">
              <Link className="text-2xl block float-left" to={'/home'}><MdDashboard /></Link>
              <Link className={`text-base font-medium flex-1 ${open && "hidden"}`} to={'/home'}>Home</Link>
            </li>
            <li className="text-gray-300 text-sm flex items-center gap-x-4 p-2 hover:bg-slate-300/50 rounded-md mt-2">
              <Link to={'/Bookings'} className="text-2xl block float-left"><BsFillJournalBookmarkFill /></Link>
              <Link className={`text-base font-medium flex-1 ${open && "hidden"}`} to={'/Bookings'}>Bookings</Link>
            </li>
            <li className="text-gray-300 text-sm flex items-center gap-x-4 p-2 hover:bg-slate-300/50 rounded-md mt-2">
              <Link className="text-2xl block float-left" to={'/Cancellation'}><MdFreeCancellation /></Link>
              <Link className={`text-base font-medium flex-1 ${open && "hidden"}`} to={'/Cancellation'}>Cancellations</Link>
            </li>
            <li className="text-gray-300 text-sm flex items-center gap-x-4 hover:bg-slate-300/50 rounded-md mt-[500px] p-2">
              <Link to={'/'} className="text-2xl block float-left"><RiLogoutBoxRFill /></Link>
              <Link to={'/'} className={`text-base font-medium flex-1 ${open && "hidden"}`}>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
