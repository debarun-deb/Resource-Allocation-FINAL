import React, { useState } from "react";
import Modal from "./Modal";

const Cards = (props) => {
  const [showModal, setshowModal] = useState(false);
  const toggleModal = () => {
    setshowModal(!showModal);
  };
  return (
    <div>
      <div
        className="cursor-pointer rounded-[24px] p-[10px] bg-gradient-to-r from-neutral-300 to-stone-400"
        onClick={toggleModal}
      >
        <div className="max-w-sm rounded-[14px] overflow-hidden h-full">
          <img src={props.loc} alt="" className="w-full" />
          <div className="px-10 py-4 bg-white h-full">
            <h2 className="text-xl pb-3 font-bold font-serif">{props.name}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
        </div>
      </div>
      <Modal onClose={toggleModal} visible={showModal} name={props.name} />
    </div>
  );
};

export default Cards;
