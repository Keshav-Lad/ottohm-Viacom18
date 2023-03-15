import React from "react";
import "./Css/dropdown.css"; 

const Dropdown = (props) => {
  return (
      <select className={`rounded-5 ${props.className}`} id={props.id}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
  );
};
export default Dropdown;
