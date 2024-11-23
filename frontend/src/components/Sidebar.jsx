import React, { useContext, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaMessage, FaPlus, FaQuestion } from "react-icons/fa6";
import { MdHistory } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { Context } from "../context/Context";

// Import the CSS file
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar-container">  {/* Use the class names from the CSS file */}
      <div>
        <IoMenu
          onClick={() => setExtended(!extended)}
          className="menu-icon"
        />

        <div
          onClick={() => newChat()}
          className="new-chat"
        >
          <FaPlus className="new-chat-icon" />
          {extended && <p>New Chat</p>}
        </div>

        {extended && (
          <div className="recent-section">
            <p className="recent-title">Recent</p>

            {prevPrompt?.map((item, index) => (
              <div
                key={index}
                onClick={() => loadPrompt(item)}
                className="recent-prompt"
              >
                <FaMessage className="recent-prompt-icon" />
                <p>{item.slice(0, 18)}...</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="footer-links">
        <div className="footer-link">
          <FaQuestion className="footer-link-icon" />
          {extended && <p>Help</p>}
        </div>
        <div className="footer-link">
          <MdHistory className="footer-link-icon" />
          {extended && <p>Activity</p>}
        </div>
        <div className="footer-link">
          <IoSettings className="footer-link-icon" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
