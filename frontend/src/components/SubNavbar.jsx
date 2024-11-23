import React from "react";
import { Link } from "react-router-dom";
import "./../styles/SubNavbar.css";

const SubNavbar = () => {
  return (
    <div className="sub-navbar">
      <ul className="sub-navbar__links">
        <li>
          <Link to="/home/java">Java</Link>
        </li>
        <li>
          <Link to="/home/cpp">C++</Link>
        </li>
        <li>
          <Link to="/home/python">Python</Link>
        </li>
        <li>
          <Link to="/home/oops">OOPs</Link>
        </li>

        <li>
          <Link to="/gpt">GPT</Link>
        </li>
      </ul>
    </div>
  );
};

export default SubNavbar;
