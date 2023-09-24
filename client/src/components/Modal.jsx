import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import dayjs from "dayjs";
import axios from "axios";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import complete from "../assets/complete.svg";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./customDateCell/CustomDateCell.css";

const Modal = ({ visible, onClose, name, books, path, render }) => {
  const user = useSelector((state) => state.User);

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
  let resourceName = name;
  let userEmail = user.email;
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const bookedDates = useSelector((state) => state.bookedDates);


  // Callback function for when dates are selected
  const onDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  // Callback function for when an input is focused
  const onFocusChange = (focusedInput) => {
    setFocusedInput(focusedInput);
  };


  const isDayHighlighted = (date) => {
    // Convert the date to a string in the 'YYYY-MM-DD' format
    const dateString = date.format("YYYY-MM-DD");

    // Check if the date falls within the highlighted range
    return bookedDates.some((range) => {
      return dateString >= range.startDate && dateString <= range.endDate;
    });
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

  const renderCalendarInfo = () => {
    return (
      <div className="flex flex-col items-center mt-10 mr-3 max-w-[100%]">
        <div className="flex flex-row justify-center items-center">
          <div className="w-[10px] h-[10px] bg-red-600 mr-2"></div>
          <p className="text-md font-semibold text-red-800">
            Booked dates, if you <br />
            still want to book <br /> you can.
          </p>
        </div>
      </div>
    );
  };

  const isOutsideRange = (day) => {
    // Disable past dates
    return day.isBefore(new Date());
  };

  async function changeStatus() {
    var resourceName = books.resourceName;
    var id = books._id;
    var status = "Approved";

    try {
      await axios.patch("http://localhost:8000/request/updateStatus", {
        id,
        status,
        resourceName,
      });
    } catch (e) {
      console.log(e);
    }
    onClose();
    render();
  }
  async function changeStatus1() {
    var resourceName = books.resourceName;
    var id = books._id;
    var status = "Cancelled";

    try {
      await axios.patch("http://localhost:8000/request/updateStatus", {
        id,
        status,
        resourceName,
      });
    } catch (e) {
      console.log(e);
    }
    onClose();
    render();
  }

  function resetFormState() {
    setEndDate(null);
    setStartDate(null);
    setFocusedInput(null);
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
      startDate === null ||
      endDate === null
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
      startDate: startDate._d,
      endDate: endDate._d,
      Technician: Technician,
      Cleaning: Cleaning,
      Sound: Sound,
      userEmail: userEmail,
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
        className={`bg-white p-4 rounded-3xl ${
          name !== "book" ? "w-[58%] h-[700px]" : "w-[50%] h-[500px]"
        } overflow-y-auto border-l-[10px] border-[#2F2E41]`}
      >
        <div className="flex justify-end p-1 float-right">
          <AiOutlineCloseCircle
            className="text-2xl cursor-pointer"
            onClick={() => {
              onClose();
              resetFormState();
            }}
          />
        </div>
        {name !== "book" ? (
          <form onSubmit={submit} method="post" className="w-full">
            <h1 className="text-3xl pt-2 px-4">Resource Form</h1>
            <div className="flex flex-row p-2 justify-between">
              <div className="flex flex-col">
                <p className="py-2 text-l font-bold">
                  Event Name <span className="text-red-600">*</span>
                </p>
                <input
                  type="text"
                  className="border-2 border-gray-700 p-2 rounded w-[200px]"
                  onChange={(e) => setEventName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <p className="py-2 text-l font-bold">
                  Phone Number <span className="text-red-600">*</span>
                </p>
                <input
                  type="text"
                  className="border-2 border-gray-700 p-2 rounded w-[200px]"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col px-2">
              <p className="py-2 text-l font-bold">
                Event Details <span className="text-red-600">*</span>
              </p>
              <textarea
                name=""
                id=""
                cols="25"
                rows="5"
                className="border-2 border-black rounded-md resize-none px-3 pt-2"
                placeholder="Enter text here.."
                onChange={(e) => setEventDetails(e.target.value)}
              ></textarea>
            </div>
            <div className="flex flex-row p-2">
              <div className="flex flex-col">
                <p className="py-2 text-l font-bold">
                  Date<span className="text-red-600">*</span>
                </p>
                <DateRangePicker
                  startDate={startDate}
                  startDateId="start_date_id"
                  endDate={endDate}
                  endDateId="end_date_id"
                  onDatesChange={onDatesChange}
                  focusedInput={focusedInput}
                  onFocusChange={onFocusChange}
                  isOutsideRange={isOutsideRange}
                  isDayHighlighted={isDayHighlighted}
                  calendarInfoPosition="after"
                  renderCalendarInfo={renderCalendarInfo} // Optional: Allow all dates to be selected
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
              <p className="py-2 text-l font-bold">
                Email <span className="text-red-600">*</span>
              </p>
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
                onClick={toast}
              >
                Submit
              </button>
              <ToastContainer />
            </div>
          </form>
        ) : (
          <div className=" mt-[5%] h-[90%] rounded-2xl px-5 pt-3 pb-2 relative flex flex-col">
            <p className="text-[17px]">
              <span className="bg-[#F79C0C] p-2 font-rubik font-bold rounded-lg">
                Resource Name
              </span>
              <span className="mx-2 font-bold">:</span>
              <span className="bg-[#2F2E41] p-2 font-rubik font-bold rounded-lg text-gray-200">
                {books.resourceName}
              </span>
            </p>
            <p className="text-[17px] pt-4">
              <span className="bg-[#F79C0C] p-2 font-rubik font-bold rounded-lg">
                Event Name
              </span>
              <span className="mx-2 ml-9 font-bold">:</span>
              <span className="bg-[#2F2E41] p-2 font-rubik font-bold rounded-lg text-gray-200">
                {books.eventName}
              </span>
            </p>
            <p className="text-[17px] pt-4">
              <span className="bg-[#F79C0C] p-2 font-rubik font-bold rounded-lg">
                Event Details
              </span>
              <span className="mx-2 ml-7 font-bold">:</span>
              <span className="bg-[#2F2E41] p-2 font-rubik font-bold rounded-lg text-gray-200">
                {books.eventDetails}
              </span>
            </p>
            <p className="text-[17px] pt-4">
              <span className="bg-[#F79C0C] p-2 font-rubik font-bold rounded-lg">
                Booked By
              </span>
              <span className="mx-2 ml-12 font-bold">:</span>
              <span className="bg-[#2F2E41] p-2 font-rubik font-bold rounded-lg text-gray-200">
                {user.email}
              </span>
            </p>
            <p className="text-[17px] pt-4">
              <span className="bg-[#F79C0C] p-2 font-rubik font-bold rounded-lg">
                Phone Number
              </span>
              <span className="mx-2 ml-3 font-bold">:</span>
              <span className="bg-[#2F2E41] p-2 font-rubik font-bold rounded-lg text-gray-200">
                {books.phoneNumber}
              </span>
            </p>
            <p className="text-[17px] pt-4">
              <span className="bg-[#F79C0C] p-2 font-rubik font-bold rounded-lg">
                Start Date
              </span>
              <span className="mx-2 ml-12 font-bold">:</span>
              <span className="bg-[#2F2E41] p-2 font-rubik font-bold rounded-lg text-gray-200">
                {dayjs(books.startDate).format("DD MMM YYYY")}
              </span>
            </p>
            <p className="text-[17px] pt-4">
              <span className="bg-[#F79C0C] p-2 font-rubik font-bold rounded-lg">
                End Date
              </span>
              <span className="mx-2 ml-14 font-bold">:</span>
              <span className="bg-[#2F2E41] p-2 font-rubik font-bold rounded-lg text-gray-200">
                {dayjs(books.endDate).format("DD MMM YYYY")}
              </span>
            </p>
            <p className="text-[17px] pt-4 z-[1]">
              <span className="bg-[#F79C0C] p-2 font-rubik font-bold rounded-lg">
                Form Id
              </span>
              <span className="mx-2 ml-[4.3rem] font-bold">:</span>
              <span className="bg-[#2F2E41] p-2 font-rubik font-bold rounded-lg text-gray-200">
                {books.formID}
              </span>
            </p>
            <img
              src={complete}
              alt=""
              className="max-h-[70%] absolute right-5 top-0 drop-shadow-[10px_10px_70px_#F79C0C]"
            />
            {path !== "/Cancellation" ? (
              <div className="flex justify-center flex-row gap-2 mt-10">
                {(books.status === "Submitted" &&
                  user.role !== "requester" &&
                  path !== "/Bookings") ||
                (books.status === "Cancelled" &&
                  user.role !== "requester" &&
                  path !== "/Bookings") ? (
                  <button
                    className="bg-[#1657b8] text-white p-2.5 rounded-full transform
                                transition duration-200 hover:scale-110 flex flex-row items-center justify-center gap-2"
                    onClick={changeStatus}
                  >
                    Approve
                    <BsCheckCircleFill size={20} />
                  </button>
                ) : null}
                {books.status === "Cancelled" ? null : (
                  <button
                    className="bg-[#b81616] text-white p-2.5 rounded-full transform
                                transition duration-200 hover:scale-110 flex flex-row items-center justify-center gap-2"
                    onClick={changeStatus1}
                  >
                    Cancel
                    <MdCancel size={23.5} />
                  </button>
                )}
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
