import "./ProductSearch.css";
import AsinDetection from "./components/AsinDetection.js";
import arrow from "./images/arrow.png";
import logo from "./images/logo.png";
import warning from "./images/warning.png";
import UrlDetection from "./components/UrlDetection.js";
import React, { useState } from "react";
import Feedback from "./components/Feedback";

const ProductSearch = () => {
  const [isAsinValid, setIsAsinValid] = useState(false);
  const [isUrlValid, setIsUrlValid] = useState(false);
  const [showAsinDetection, setShowAsinDetection] = useState(false);
  const isFormDisabled = !(isUrlValid || isAsinValid);
  return (
    <div className="app">
      <div className="header-wrapper">
        <div className="logo-container">
          <img src={logo} />
        </div>
      </div>
      <div className="heading-container">
        <h2>2nd Step</h2>
      </div>
      <div className="step-desc">
        <h3>
          Go to Amazon.com and search the word{" "}
          <span className="product-cat">sleep aid</span> & pick the product that
          is most appealing to you.
        </h3>
      </div>
      <div className="info-warning">
        <img className="warning-sign" src={warning} /> As this is for market
        research, please do not select our brand.
      </div>

      <div className="comp-container">
        <div className="url-input">
          <UrlDetection
            setIsUrlValid={setIsUrlValid}
            setShowAsinDetection={setShowAsinDetection}
            isUrlValid={isUrlValid}
          />
        </div>
        {showAsinDetection && (
          <div className="ASIN-input">
            <AsinDetection
              setIsAsinValid={setIsAsinValid}
              isAsinValid={isAsinValid}
            />
          </div>
        )}
      </div>
      <div className="scoll-btn">
        <a href="#textareas">
          <img src={arrow} />
        </a>
      </div>
      <Feedback isFormDisabled={isFormDisabled} />
    </div>
  );
};

export default ProductSearch;
