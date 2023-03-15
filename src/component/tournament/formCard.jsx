import React from "react";
import Textarea from "../common/textbox";
import Dropdown from "../common/dropdown";
import "./formcard.css";

const FormCard = () => {
  return (
    <div className="card mt-2">
      <div className="card-body">
        <div className="container">
        <div className="row">
            <div className="col-4 text-wrap">
              <p>Team 1 (Grp A)</p>
            </div>
            <div className="col-4 text-wrap">
              <p>Team 10 (Grp D)</p>
            </div>
            <div className="col-4 text-wrap">
              <p>Match 1</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="date-input">Date</label>
              <Textarea className="form-control textnormal" type="date" id="date-input" />
            </div>
            <div className="col">
              <label htmlFor="city-input">City</label>
              <Dropdown
                className="form-control form-select textnormal"
                id="city-input"
              ></Dropdown>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="time-input">Time</label>
              <Textarea className="form-control textnormal" type="time" id="time-input" />
            </div>
            <div className="col">
              <label htmlFor="stadium-input">Stadium</label>
              <Dropdown
                className="form-control form-select textnormal"
                id="stadium-input"
              ></Dropdown>
            </div>
          </div>
          <div className="row">
            <div className="">
              <label for="description-input">Description</label>
              <textarea
                className="form-control textnormal"
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
