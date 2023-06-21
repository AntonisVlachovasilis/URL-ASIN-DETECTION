import React from "react";

const Feedback = ({ isFormDisabled }) => {
  return (
    <div id="textareas" className="textareas">
      <div className="textareas-wrapper">
        <div className="textarea-container">
          <h2 className="question-title reason">
            What made you pick this product from the<br></br> search results?
          </h2>
          <textarea disabled={isFormDisabled}></textarea>
        </div>
        <div className="textarea-container">
          <h2 className="question-title prefer">
            Looking to the product detail page,<br></br>what grabs your
            attention the most?<br></br>What would you like about this product?
          </h2>
          <textarea disabled={isFormDisabled}></textarea>
        </div>
      </div>
      <button className="yellow-btn" disabled={isFormDisabled}>
        Next
      </button>
    </div>
  );
};

export default Feedback;
