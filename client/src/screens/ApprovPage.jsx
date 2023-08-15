import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Bcards from "../components/BCards";
import { useLocation } from "react-router-dom";

function ApprovPage() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const location = useLocation();
  

  useEffect(() => {
    const getData = async () => {
      try {
        const response = (
          await axios.get("http://localhost:8000/request/getallBookings")
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
    getData();
  }, []);
  return (
    <div>
      <div className="bg-[#1F6E8C] flex py-4">
        <h1 className="px-3 text-xl font-bold">For Approval</h1>
      </div>
      <div className="grid grid-cols-3 gap-0 mx-auto w-[90%] pl-10">
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error</h1>
        ) : (
          bookings.map((books) => {
            if (books.status === "Submitted") {
              return (
                <Bcards
                  books={books}
                  path={location.pathname}
                />
              );
            } else {
              return null;
            }
          })
        )}
      </div>
      <div className="bg-[#1F6E8C] flex my-6 py-3 rounded-full">
        <h1 className="px-3 text-xl font-bold">Approved Bookings</h1>
      </div>
      <div className="grid grid-cols-3 gap-0 mx-auto w-[90%] pl-10">
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error</h1>
        ) : (
          bookings.map((books) => {
            if (books.status === "Approved") {
              return <Bcards books={books} />;
            } else {
              return null;
            }
          })
        )}
      </div>
    </div>
  );
}

export default ApprovPage;
