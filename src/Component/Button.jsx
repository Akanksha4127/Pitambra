import React from "react";

const ButtonWrapper = ({ onClick, children, type = "button" }) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className=" py-2 px-4   bg-orange-600 text-white drop-shadow-xl hover:scale-105 hover:drop-shadow-2xl transition duration-150 ease-in-out"
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonWrapper;
