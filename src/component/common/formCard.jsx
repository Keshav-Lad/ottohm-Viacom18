import React from "react";
import Textarea from "../common/textbox";
import Dropdown from "./dropdown";
const FormCard = () => {
  return (
    <div className="card mt-2">
      <div className="card-body">
        <div className="container">
          <div className="row">
            <div className="col">
              <label htmlFor="date-input">Date</label>
              <Textarea className="form-control" type="date" id="date-input" />
            </div>
            <div className="col">
              <label htmlFor="city-input">City</label>
              <Dropdown
                className="form-control form-select"
                id="city-input"
              ></Dropdown>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="time-input">Time</label>
              <Textarea className="form-control" type="time" id="time-input" />
            </div>
            <div className="col">
              <label htmlFor="stadium-input">Stadium</label>
              <Dropdown
                className="form-control form-select"
                id="stadium-input"
              ></Dropdown>
            </div>
          </div>
          <div className="row">
            <div className="">
              <label for="description-input">Description</label>
              <textarea
                className="form-control"
                id="description-input"
                rows="2"
                placeholder="Enter Description"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCard;