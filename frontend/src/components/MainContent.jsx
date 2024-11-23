import React, { useContext } from "react";
import {
  FaCode,
  FaCompass,
  FaLightbulb,
  FaMicrophone,
  FaUserCircle,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdAddPhotoAlternate } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { Context } from "../context/Context";

import geminiLogo from "../assets/geminiLogo.png";

import "../styles/MainContent.css";

const MainContent = () => {
  const {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompt,
    setPrevPrompt,
    showResult,
    loading,
    resultData,
    onSent,
  } = useContext(Context);

  return (
    <div className="main-content">
      <div className="header">
        <p>Gemini</p>
        <FaUserCircle />
      </div>

      <div className="content-container">
        {!showResult ? (
          <>
            <div className="welcome-section">
              <p>
                <span className="welcome-highlight">Hello,</span>
              </p>
              <p className="sub-text">How can I help you today?</p>
            </div>

            <div className="grid-container">
              <div className="grid-item">
                <p className="grid-text">Suggeset top 10 webseries.</p>
                <FaCompass className="grid-icon" />
              </div>

              <div className="grid-item">
                <p className="grid-text">What is loop in Javascript?</p>
                <FaLightbulb className="grid-icon" />
              </div>

              <div className="grid-item">
                <p className="grid-text">Who is known as the "Mother of Dragons"?</p>
                <FaMessage className="grid-icon" />
              </div>

              <div className="grid-item">
                <p className="grid-text">
                  Who sits on the Iron Throne at the end of the series?
                </p>
                <FaCode className="grid-icon" />
              </div>
            </div>
          </>
        ) : (
          <div className="result-section">
            <div className="user-prompt">
              <FaUserCircle className="icon" />
              <p className="prompt-text">{recentPrompt}</p>
            </div>

            <div className="response-section">
              <img src={geminiLogo} alt="" className="logo" />
              {loading ? (
                <div className="loading-section">
                  <div className="loading-line"></div>
                  <div className="loading-line"></div>
                  <div className="loading-line"></div>
                </div>
              ) : (
                <p
                  dangerouslySetInnerHTML={{ __html: resultData }}
                  className="response-text"
                ></p>
              )}
            </div>
          </div>
        )}

        <div className="input-section">
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter a prompt here..."
              className="input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <div className="input-icons">
              <MdAddPhotoAlternate className="icon" />
              <FaMicrophone className="icon" />
              {input && <IoMdSend onClick={() => onSent()} className="icon" />}
            </div>
          </div>
          <p className="footer-text">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
