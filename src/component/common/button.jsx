import React from "react";
import "./Css/button.css";
const Button = (props) => {
  return (
    <button onClick={props.onClick} className={props.className} type="submit">
      {props.text}
    </button>
  );
};

export default Button;
