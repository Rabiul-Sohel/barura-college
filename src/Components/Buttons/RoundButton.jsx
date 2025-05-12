import React from "react";

const RoundButton = ({ name, action }) => {
  return (
    <button onClick={action} className="lg:py-1 text-sm lg:text-base mt-2 rounded-base px-3 lg:px-5 py-0  border cursor-pointer border-main hover:bg-main rounded-full  duration-500 transition hover:text-white text-main font-semibold ">
      {" "}
      <span className="text-xl font-semibold">+</span> {name}
    </button>
  );
};

export default RoundButton;
