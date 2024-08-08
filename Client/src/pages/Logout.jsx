import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const logout = () => {
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    setCurrentUser(null);
    navigate("/login");
  });
  return <div></div>;
};

export default logout;
