import React, { useState } from "react";

const Analytics = () => {
  const [resource, setResource] = useState("");



  return (
    <div>
      <h1>Select the resource:</h1>
      <select
        name=""
        id=""
        onChange={(e) => {
          setResource(e.target.value);
        }}
      >
        <option value="Multipurpose Hall">Multipurpose Hall</option>
        <option value="Seminar Hall">Seminar Hall</option>
        <option value="Central Computing Facility">
          Central Computing Facility
        </option>
      </select>
      <div></div>
    </div>
  );
};

export default Analytics;
