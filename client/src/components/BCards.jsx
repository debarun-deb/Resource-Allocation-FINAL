import React, { useState } from "react";
import dayjs from "dayjs";
import { FaLongArrowAltRight } from "react-icons/fa";
import Modal from "./Modal";

const Bcards = (props) => {
  const [showModal, setshowModal] = useState(false);
  const toggleModal = () => {
    setshowModal(!showModal);
  };
  return (
    <div
      className="py-3 cursor-pointer flex justify-center max-w-[400px]"
      onClick={toggleModal}
    >
      <div className="shadow-lg shadow-gray-600 rounded-xl overflow-hidden w-[100%]">
        <h1 className="text-2xl font-semibold pt-4 px-3 pb-1 bg-[#213555] font-rubik shadow-lg shadow-[#4F709C] text-[#D8C4B6]">
          {props.books.resourceName}
        </h1>
        <div className="bg-[#F5EFE7]">
          <h1 className="text-lg font-bold px-3 py-2 underline">
            {props.books.eventName}
          </h1>
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-lg font-semibold p-2">
              {dayjs(props.books.startDate)
                .subtract(1, "day")
                .format("DD MMM YYYY")}
            </h1>
            <FaLongArrowAltRight />
            <h1 className="text-lg font-semibold p-2">
              {dayjs(props.books.endDate).format("DD MMM YYYY")}
            </h1>
          </div>
          <div className="flex flex-row justify-between mr-5">
            <h1 className="text-md font-semibold p-2">
              Status: {props.books.status}
            </h1>
          </div>
        </div>
      </div>
      <Modal
        onClose={toggleModal}
        visible={showModal}
        name="book"
        books={props.books}
        path={props.path}
        render={props.render}
      />
    </div>
  );
};

export default Bcards;
