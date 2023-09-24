import React, { useState } from "react";
import axios from "axios";
import { Line } from 'react-chartjs-2';

const Analytics = () => {
  const [resource, setResource] = useState("");

  const getAnalytics = async () => {
    try {
      const body = {
        resourceName: resource,
      };
      const res = await axios.post(
        "http://localhost:8000/admin/startDates",
        body
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const changeResource = (e) => {
    setResource(e.target.value);
  };

  return (
    <div>
      <h1 className="font-rubik text-xl mx-5 my-3">Select the resource:</h1>
      <div className="flex flex-row gap-5 mx-5 my-3">
        <select
          name=""
          id=""
          onChange={(e) => {
            changeResource(e);
          }}
          className="border-2 border-black border-opacity-50 rounded-lg p-2"
        >
          <option value="Multipurpose Hall">Multipurpose Hall</option>
          <option value="Seminar Hall">Seminar Hall</option>
          <option value="Central Computing Facility">
            Central Computing Facility
          </option>
        </select>
        <button onClick={getAnalytics} className="border-2 border-black rounded-xl px-2 border-opacity-50 bg-[#1657b8] text-white transform transition duration-200 hover:scale-110">Get Ananlytcis</button>

        <Line />
      </div>
    </div>
  );
};

export default Analytics;
