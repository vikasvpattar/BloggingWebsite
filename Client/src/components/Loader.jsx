import React from "react";
import spinner from "../assets/spinner.gif";

const Loader = () => {
  return (
    <div className="">
      <div className="">
        <img src={spinner} alt="loader" />
      </div>
    </div>
  );
};

export default Loader;
