import React from "react";
import "./Css/dropdown.css"; 

const Dropdown = (props) => {
  return (
      <select className={`rounded-5 ${props.className}`} id={props.id}>
        {console.log(props.options)}
          {props.options.map((option,index) => (
        <option key={index}>{option}</option>
      ))}
      </select>
  );
};
export default Dropdown;
