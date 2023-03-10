import React from "react";
import "./Css/button.css"
const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick} className="btn btn-primary mt-4 button-add-location" type="submit">
        {props.text}
      </button>
    </div>
  );
};

export default Button;
