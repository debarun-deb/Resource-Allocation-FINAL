import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Bcards from "../components/BCards";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Cancellation = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const location = useLocation();
  const token = useSelector((state) => state.token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const getData = async () => {
    try {
      const response = (
        await axios.get("http://localhost:8000/request/requesterForms", config)
      ).data;
      setBookings(response);
      setLoading(false);
      console.log(response);
    } catch (error) {
      setError(true);
      console.error(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  });
  return (
    <div>
      <div className="grid grid-cols-3 gap-0 mx-auto w-[90%] pl-10">
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error</h1>
        ) : (
          bookings.map((books) => {
            if (books.status === "Cancelled") {
              return (
                <Bcards
                  books={books}
                  path={location.pathname}
                  render={getData}
                />
              );
            } else {
              return null;
            }
          })
        )}
      </div>
    </div>
  );
};

export default Cancellation;
