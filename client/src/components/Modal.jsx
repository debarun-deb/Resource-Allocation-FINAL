import React, { useState } from "react";
import { DatePicker } from "antd";
import { AiOutlineCloseCircle } from "react-icons/ai";
import dayjs from "dayjs";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { RangePicker } = DatePicker;

const Modal = ({ visible, onClose }) => {
  let [dates, setDate] = useState([]);
  let [eventName, setEventName] = useState("");
  let [eventDetails, setEventDetails] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [email, setEmail] = useState("");
  let [studentCoordinatorName, setStudentCoordinatorName] = useState(""); // New state for student coordinator name
  let [studentEmail, setStudentEmail] = useState("");
  let [registrationNumber, setRegistrationNumber] = useState("");
  let [Technician, setTechnician] = useState(false);
  let [Cleaning, setCleaning] = useState(false);
  let [Sound, setSound] = useState(false);
  let resourceName = document.cookie.split(";")[0].split("=")[1];

  const disablePastDates = (current) => {
    return current && current < dayjs().endOf("day");
  };

  function changeSound() {
    setSound((val) => !val);
  }

  function changeTechnician() {
    setTechnician((val) => !val);
  }

  function changeCleaning() {
    setCleaning((val) => !val);
  }

  function filterByDates(values) {
    const startDate = dayjs(values[0]).add(1, "day").startOf("day");
    const endDate = dayjs(values[1]).endOf("day");
    setDate([startDate, endDate]);
  }

  const notify = (msg) =>
    toast(msg);

  function resetFormState() {
    setDate([]);
    setEventName("");
    setEventDetails("");
    setPhoneNumber("");
    setEmail("");
    setStudentCoordinatorName("");
    setStudentEmail("");
    setRegistrationNumber("");
    setTechnician(false);
    setCleaning(false);
    setSound(false);
  }

  async function submit(e) {
    e.preventDefault();
    const phoneNumberRegex = /^[6789]\d{9}$/;
    if (
      eventName === "" ||
      eventDetails === "" ||
      phoneNumber === "" ||
      email === "" ||
      dates.length !== 2
    ) {
      toast.error("Please fill out all required fields.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    } else if (!phoneNumberRegex.test(phoneNumber)) {
      toast.warn("Invalid phone number.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    } else {
      toast.success("Form Submitted", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      resetFormState();
    }

    var formData = {
      resourceName: resourceName,
      eventName: eventName,
      eventDetails: eventDetails,
      phoneNumber: phoneNumber,
      email: email,
      studentCoordinatorName: studentCoordinatorName,
      studentEmail: studentEmail,
      registrationNumber: registrationNumber,
      startDate: dates[0],
      endDate: dates[1],
      Technician: Technician,
      Cleaning: Cleaning,
      Sound: Sound,
    };
    
    try {
      await axios.post("http://localhost:8000/request/home", formData);
      setTimeout(() => onClose(), 900);
    } catch (e) {
      console.log(e);
    }
  }

  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="bg-white p-4 rounded w-[800px] h-[700px] overflow-y-auto"
      >
        <div className="flex justify-end p-1 float-right">
          <AiOutlineCloseCircle
            className="text-2xl cursor-pointer"
            onClick={onClose}
          />
        </div>
        <form onSubmit={submit} method="post" className="w-full">
          <h1 className="text-3xl pt-2 px-4">Resource Form</h1>
          <div className="flex flex-row p-2 justify-between">
            <div className="flex flex-col">
              <p className="py-2 text-l font-bold">Event Name <span className="text-red-600">*</span></p>
              <input
                type="text"
                className="border-2 border-gray-700 p-2 rounded w-[200px]"
                onChange={(e) => setEventName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <p className="py-2 text-l font-bold">Phone Number <span className="text-red-600">*</span></p>
              <input
                type="text"
                className="border-2 border-gray-700 p-2 rounded w-[200px]"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col px-2">
            <p className="py-2 text-l font-bold">Event Details <span className="text-red-600">*</span></p>
            <textarea
              name=""
              id=""
              cols="25"
              rows="5"
              className="border-2 border-black rounded-md"
              placeholder="Enter text here.."
              onChange={(e) => setEventDetails(e.target.value)}
            ></textarea>
          </div>
          <div className="flex flex-row p-2">
            <div className="flex flex-col">
              <p className="py-2 text-l font-bold">Date & time <span className="text-red-600">*</span></p>
              <RangePicker
                className="border-black hover:border-gray-500"
                format={"DD-MM-YYYY"}
                onChange={filterByDates}
                disabledDate={disablePastDates}
              />
            </div>
          </div>
          <div className="flex flex-col p-2">
            <p className="text-l font-bold">Necessary Facilities</p>
          </div>
          <div className="flex flex-row px-2">
            <p>Sound Equipment</p>
            <input
              type="checkbox"
              name=""
              id=""
              className="mx-2 my-2"
              checked={Sound}
              onChange={changeSound}
            />
            <p className="ml-7">Cleaning</p>
            <input
              type="checkbox"
              name=""
              id=""
              className="mx-2 my-2"
              checked={Cleaning}
              onChange={changeCleaning}
            />
            <p className="ml-7">Technician</p>
            <input
              type="checkbox"
              name=""
              id=""
              className="mx-2 my-2"
              checked={Technician}
              onChange={changeTechnician}
            />
          </div>
          <div className="flex flex-col p-2">
            <p className="py-2 text-l font-bold">Email <span className="text-red-600">*</span></p>
            <input
              type="email"
              className="border-2 border-gray-700 p-2 rounded w-[200px]"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col p-2">
            <p className="py-2 text-l font-bold">Student Coordinator Name</p>
            <input
              type="text"
              className="border-2 border-gray-700 p-2 rounded w-[200px]"
              onChange={(e) => setStudentCoordinatorName(e.target.value)}
            />
          </div>
          <div className="flex flex-col p-2">
            <p className="py-2 text-l font-bold">Student Email</p>
            <input
              type="email"
              className="border-2 border-gray-700 p-2 rounded w-[200px]"
              onChange={(e) => setStudentEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col p-2">
            <p className="py-2 text-l font-bold">Registration Number</p>
            <input
              type="text"
              className="border-2 border-gray-700 p-2 rounded w-[200px]"
              onChange={(e) => setRegistrationNumber(e.target.value)}
            />
          </div>
          <div className="flex p-2">
            <button
              className="w-[100px] py-2 mt-8 border-2 bg-[#27374D] hover:bg-[#526D82] text-white rounded-md"
              type="submit"
              onClick={notify}
            >
              Submit
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;

