import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Bcards from "../components/BCards";

const Cancellation = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
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
      <div className="grid grid-cols-3 gap-0 mx-auto w-[90%] pl-10">
        {loading ? (<h1>Loading...</h1>): error ? (<h1>Error</h1>) : (bookings.map((books)=>{
         if(books.status==='cancel'){
          return <Bcards books={books}/>
         }
         else{
          return null;
         }}))}
      </div>
    </div>
  );
};

export default Cancellation;
