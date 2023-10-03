import React from "react";
import axios from "axios";
import resource from "../assets/resource.svg";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../state";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login2 = () => {
  const user = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    toast();
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/user/login", {
        // Update the URL to the login endpoint
        email,
        password,
      });

      if (response.status === 200) {
        console.log(response.data.token);
        // Handle the successful login here, such as saving the token or redirecting to another page
        dispatch(
          setLogin({
            user: response.data.data.user,
            token: response.data.token,
          })
        );
        history("/");
      } else {
        // Handle other possible responses
        toast.error("Invalid username or password.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      toast.error("Invalid username or password.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <div className="w-full h-screen flex bg-[#E3CCAE]">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]">
        <div className=" w-full h-[550px] hidden md:flex bg-white">
          <img className="" src={resource} alt="" />
        </div>
        <div className="flex justify-center items-center h-full bg-[#00425A] px-10 md:px-4 ">
          <form
            action=""
            className="max-w-[400ox] w-full mx-auto p-8 text-white"
          >
            <h2 className="text-4xl font-bold text-center py-8">Log In</h2>
            <div className="flex flex-col mb-4">
              <label htmlFor="" className="text-lg py-2">
                Username
              </label>
              <input
                type="email"
                className="border relative bg-gray-100 p-2 text-black"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-lg py-2">
                Password
              </label>
              <input
                type="password"
                className="border relative bg-gray-100 p-2 text-black"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="w-full py-3 mt-8 bg-[#1F8A70] hover:bg-cyan-700 rounded-full"
              type="submit"
              onClick={submit}
            >
              Log In
            </button>
            <ToastContainer />
            <p className="flex items-center mt-8">
              <input type="checkbox" className="mr-2" />
              Remember me
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login2;
