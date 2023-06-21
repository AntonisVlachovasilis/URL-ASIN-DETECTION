import React, { useEffect, useState } from "react";
import wrong from "../images/wrong.png";
import product from "../images/product.png";
import check from "../images/check.png";
import { urlValidation } from "../utils";

const UrlDetection = ({ setIsUrlValid, isUrlValid, setShowAsinDetection }) => {
  const [productUrl, setProductUrl] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  useEffect(() => {
    setShowSpinner(false);
    if (productUrl && urlValidation(productUrl)) {
      setShowSpinner(true);
      setTimeout(() => {
        setShowSpinner(false);
        if (
          productUrl ===
          "https://www.amazon.com/One-Womens-Petite-Multivitamins-Count/dp/B004XSOJ02"
        ) {
          setIsUrlValid(true);
          setShowAsinDetection(false);
        } else {
          setShowAsinDetection(true);
          setIsUrlValid(false);
        }
      }, 2000);
    } else if (productUrl && !urlValidation(productUrl)) {
      setShowAsinDetection(true);
      setIsUrlValid(false);
    }
  }, [productUrl]);

  const showDetectionResults = productUrl && !showSpinner;

  return (
    <div className="form-container">
      <h4>
        Paste here the URL of the product that you choose!
        <span
          className={`loader ${showSpinner ? "active-spinner" : ""}`}
        ></span>
      </h4>
      <form>
        <input
          className={`url-input ${
            !isUrlValid && productUrl !== "" && !showSpinner ? "error" : " "
          }`}
          type="url"
          name="url"
          required
          onChange={(e) => {
            e.preventDefault();
            setProductUrl(e.target.value);
          }}
        />
      </form>
      {showDetectionResults && (
        <div className="search-result">
          {isUrlValid ? (
            <div className="result">
              <img src={product} /> <img className="valid-sign" src={check} />{" "}
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

export default UrlDetection;
