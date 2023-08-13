import React from "react";
import Cards from "../components/Cards";
import wall_post from "../assets/Seminar_hall.jpg";
import Mult from '../assets/Multipurpose_Hall.jpg'
import computer from "../assets/ccf.jpg";

const Login = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-bold">
          Please choose the resource you would like to reserve
        </h1>
      </div>

      <div className="grid grid-cols-3 justify-items-center">
        <Cards name="Seminar Hall" loc={wall_post} />
        <Cards name="Multipurpose Hall" loc={Mult} />
        <Cards name="Central Computing Facility" loc={computer} />
      </div>
    </div>
  );
};

export default Login;
