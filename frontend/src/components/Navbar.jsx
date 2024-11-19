import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../styles/Navbar.css"; // Import SCSS styles
import { useAuth } from "../context/AuthContext"; // Auth context for logout

const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/home">CodeReady</Link>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/code">Code Here</Link>
        </li>
        <li>
          <Link to="/community">Community</Link>
        </li>
        <li>
          <button onClick={handleLogout} className="navbar__logout">Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
