import React from "react";
import "./Css/dropdown.css"; 

const Dropdown = (props) => {
  return (
      <select className={`rounded-5 ${props.className}`} id={props.id}>
          {props.options.map((option) => (
        <option>{option}</option>
      ))}
      </select>
  );
};
export default Dropdown;
