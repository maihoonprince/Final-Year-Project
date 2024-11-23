import React from "react";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import "../styles/Gpt.css"

const Gpt = () => {
  return (
    <div className="appContainer">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="mainContent">
        <MainContent />
      </div>
    </div>
  );
};

export default Gpt;
