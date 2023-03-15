import React from "react";
import "./Css/button.css";
const Button = (props) => {
  return (
    <button onClick={props.onClick} className={`rounded-5   ${props.className}`} type="submit">
      {props.icon && props.icon} {props.text}
    </button>
  );
};

export default Button;
