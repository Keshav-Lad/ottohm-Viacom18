import React from "react";

const Dropdown = (props) => {
  return (
    <div className={props.className} id={props.id}>
      <select className="form-control" id="exampleFormControlSelect1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
  );
};
export default Dropdown;
