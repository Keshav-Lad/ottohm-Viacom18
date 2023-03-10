import React from "react";

const Dropdown=(props)=> {
  return (
    <div>
      <div className="form-group">
        <label for="exampleFormControlSelect1">Example select</label>
        <select className="form-control" id="exampleFormControlSelect1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
    </div>
  );
}
export default Dropdown;