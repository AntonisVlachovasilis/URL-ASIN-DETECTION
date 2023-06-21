import React, { useEffect, useState } from "react";
import product from "../images/product.png";
import check from "../images/check.png";
import wrong from "../images/wrong.png";
import { asinValidation } from "../utils";

const AsinDetection = ({ isAsinValid, setIsAsinValid }) => {
  const [isInstructionsVisible, setIsInstructionsVisible] = useState(false);
  const [productAsin, setProductAsin] = useState("");
  const [showAsinSpinner, setShowAsinSpinner] = useState(false);

  useEffect(() => {
    setShowAsinSpinner(false);
    if (productAsin && asinValidation(productAsin)) {
      setShowAsinSpinner(true);
      setTimeout(() => {
        setShowAsinSpinner(false);
        if (productAsin === "B004QQ9LVS") {
          setIsAsinValid(true);
        } else {
          setIsAsinValid(false);
        }
      }, 2000);
    } else if (productAsin && !asinValidation(productAsin)) {
      setIsAsinValid(false);
    }
  }, [productAsin]);

  const showDetectionResults = productAsin && !showAsinSpinner;

  return (
    <div className="asin-form-container">
      <h4>
        OR Try to find manually the ASIN
        <span
          className={`loader ${showAsinSpinner ? "active-spinner" : ""}`}
        ></span>
      </h4>
      <form
        className={`asin-form ${
          !isAsinValid && productAsin !== "" && !showAsinSpinner ? "error" : ""
        }`}
      >
        <input
          className="asin-input"
          type="text"
          required
          onChange={(e) => {
            e.preventDefault();
            setProductAsin(e.target.value);
          }}
        />
        <p
          className="instructions"
          onClick={() => setIsInstructionsVisible(!isInstructionsVisible)}
        >
          see how
        </p>
      </form>
      {isInstructionsVisible && (
        <div className="modal">
          <div className="modal-title">
            <h3>Instructions</h3>
          </div>
          <p className="modal-instructions">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button
            className="close-modal-btn"
            onClick={() => setIsInstructionsVisible(false)}
          >
            x
          </button>
        </div>
      )}
      {showDetectionResults && (
        <div className="search-result">
          {isAsinValid ? (
            <div className="result">
              <img src={product} /> <img className="valid-sign" src={check} />
              <div className="result-msg">
                <p className="product-title">Cherry Plus Concetrate</p>
                <p className="success-msg">This is a valid product</p>
              </div>
            </div>
          ) : (
            <div className="error-msg">
              <img src={wrong} /> Sorry we didn't find product information at
              this URL.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AsinDetection;
