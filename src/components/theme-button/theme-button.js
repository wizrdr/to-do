import React from "react";


import "./theme-button.css";

const ThemeButton = ({ onClick, ...props}) => {
//no anon func
// change props.children to children

  return (
    <div className="container">
      <input
        type="checkbox"
        name="toggle"
        id="toggle-button"
        className="toggle-button"
        onClick={() => onClick()}
      />
      <label forhtml="toggle-button" className="text">
        {props.children}
      </label>
    </div>
  );
};

export default ThemeButton;