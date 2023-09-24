import React, { useState } from "react";
import axios from "axios";
import LineChart from "../components/LineChart/LineChart";

const Analytics = () => {
  const [resource, setResource] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const getAnalytics = async () => {
    try {
      const body = {
        resourceName: resource,
        email: email,
        status: status,
      };
      const res = await axios.post(
        "http://localhost:8000/admin/getResources",
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
      <h1 className="font-rubik text-xl mx-5 my-3">
        Select the respective field to display Graph:
      </h1>
      <div className="flex flex-row gap-5 mx-5 my-3">
        <select
          name=""
          id=""
          onChange={(e) => {
            changeResource(e);
          }}
          className="border-2 border-black border-opacity-50 rounded-lg p-2"
        >
          <option value="">Resource Name</option>
          <option value="Multipurpose Hall">Multipurpose Hall</option>
          <option value="Seminar Hall">Seminar Hall</option>
          <option value="Central Computing Facility">
            Central Computing Facility
          </option>
        </select>
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          className="border-2 border-black border-opacity-50 rounded-lg p-2"
        />
        <select
          name=""
          id=""
          onChange={(e) => {
            setStatus(e.target.value);
          }}
          className="border-2 border-black border-opacity-50 rounded-lg p-2"
        >
          <option value="">Status</option>
          <option value="Approved">Approved</option>
          <option value="Cancelled">Cancelled</option>
          <option value="Submitted">Submitted</option>
        </select>
        <button
          onClick={getAnalytics}
          className="border-2 border-black rounded-xl px-2 border-opacity-50 bg-[#1657b8] text-white transform transition duration-200 hover:scale-110"
        >
          Get Ananlytics
        </button>

        {/* <div className="h-[400px]">
          {Object.keys(dataset).length === 0 ? null : (
            <LineChart chartData={dataset} />
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Analytics;
