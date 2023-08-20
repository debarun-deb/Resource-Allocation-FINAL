import React from "react";
import Cards from "../components/Cards";
import wall_post from "../assets/Seminar_hall.jpg";
import Mult from "../assets/Multipurpose_Hall.jpg";
import computer from "../assets/ccf.jpg";
import "./Home.css";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-200 background flex items-center flex-col">
      <div className="flex items-center justify-center bg-white py-8 shadow-[0_35px_75px_-10px_#FF6000] w-full">
        <h1 className="text-3xl font-extrabold text- px-6">
          Welcome! Choose the Perfect Space for Your Reservation
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-10 mt-[6%]">
        <Cards name="Seminar Hall" loc={wall_post} />
        <Cards name="Multipurpose Hall" loc={Mult} />
        <Cards name="Central Computing Facility" loc={computer} />
      </div>

      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: "-1" }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-gray-300 opacity-25"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/cardboard-flat.png')",
          }}
        />
      </div>
    </div>
  );
};

export default Login;
