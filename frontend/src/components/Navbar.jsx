import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../styles/Navbar.css"; // Import SCSS styles
import { useAuth } from "../context/AuthContext"; // Auth context for logout

const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  // Theme state
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle theme toggle
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode); // Apply/remove dark mode class to body
  };

  useEffect(() => {
    // Apply the current theme on component mount
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, []);

  useEffect(() => {
    // Save theme preference in localStorage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

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
          <button onClick={handleLogout} className="navbar__logout">
            Logout
          </button>
        </li>
        <li>
          <button onClick={toggleTheme} className="navbar__theme-toggle">
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
