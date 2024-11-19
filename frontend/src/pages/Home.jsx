import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/signup");
  };

  return (
    <div>
      <h1>Welcome to CodeReady!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
