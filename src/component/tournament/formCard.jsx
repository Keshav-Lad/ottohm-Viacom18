import React from "react";
import Textarea from "../common/textbox";
import Dropdown from "../common/dropdown";
import "./formcard.css";
import { useState,useEffect,useMemo } from "react";


const FormCard = (props) => {
  const[stadium,setStadium]=useState([])
  const stadiumData = useMemo(() => ['stadium 1','stadium 2','stadium 3','stadium 4'], [])
  useEffect(()=>{
    setStadium(stadiumData)
  },[stadiumData])

  return (
    <div className="card mt-2">
      <div className="card-body ">
        <div className="container ">
        <div className="row">
            <div className="col-4 text-wrap textnormal">
              <p>Team 1 (Grp A)</p>
            </div>
            <div className="col-4 text-wrap textnormal">
              <p>Team 10 (Grp D)</p>
            </div>
            <div className="col-4 text-wrap textnormal">
              <p>Match 1</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="date-input">Date</label>
              <Textarea className="form-control form-control-sm textnormal" type="date" id="date-input" />
            </div>
            <div className="col">
              <label htmlFor="city-input">City</label>
              <Dropdown
                className="form-control dropdown-input-sm form-select textnormal"
                id="city-input"
                options={props.options}
              ></Dropdown>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="time-input">Time</label>
              <Textarea className="form-control form-control-sm textnormal" type="time" id="time-input" />
            </div>
            <div className="col">
              <label htmlFor="stadium-input">Stadium</label>
              <Dropdown
                className="form-control dropdown-input-sm form-select textnormal"
                id="stadium-input"
                options={stadium}
              ></Dropdown>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="description-input">Description</label>
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
