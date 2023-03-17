import React from "react";
import "./Css/dropdown.css"; 

const Dropdown = (props) => {
  console.log(props.options);
  return (
      <select className={`rounded-5 ${props.className}`} id={props.id}>
        {console.log(props.options)}
          {props.options.map((option) => (
        <option>{option}</option>
      ))}
      </select>
  );
};
export default Dropdown;
