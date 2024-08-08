import React from "react";
import spinner from "../assets/spinner.gif";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen grid place-items-center bg-gray-600">
      <div className="w-16 aspect-square">
        <img src={spinner} alt="loader" />
      </div>
    </div>
  );
};

export default Loader;
