import React from "react";
import Button from "../common/button";
import Dropdown from "../common/dropdown";
import Textarea from "../common/textbox";
import Calander from "../common/calander";
import { PencilSquare } from "react-bootstrap-icons";
import "./tournamentname.css";
import Breadcrumbs from "../common/breadcrumb";
import { useNavigate } from "react-router-dom";
import constants from "../../utils/constants.json"
import { useState,useEffect, useMemo } from "react";

const Tournamentname = () => {

  const navigate= useNavigate();

  const[stadium,setStadium]=useState([])
  const[city, setCity]=useState([])

  const stadiumData = useMemo(() => ['stadium 1','stadium 2','stadium 3','stadium 4'], [])
  const cityDropdownData = useMemo(() => ['city 1','city 2','city 3','city 4','city 5'], [])

  useEffect(()=>{
    setStadium(stadiumData)
    setCity(cityDropdownData)
  },[stadiumData,cityDropdownData])
  return (
    <div className="container ">
      
      <Breadcrumbs title="Tournaments" subtitle="Tournament Name" onClick={()=> navigate(constants.tournaments)}/>
      
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="row">
            <div className="col">
              <label htmlFor="locationID">Tournament ID</label>
              <Textarea
                type="text"
                className="form-control mt-2 mb-4"
                id="locationID"
              ></Textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <label htmlFor="locationName">Date</label>
              <Textarea
                type="Date"
                className="form-control mt-2 mb-4"
                id="locationName"
              ></Textarea>
            </div>
          </div>

          {/* <div className="row-md-5 tournament-details ">
            <div className="col">
              <div className="row">
                <div className="col-md-2">
                  <h6>Team 1</h6>
                </div>
                <div className="col-md-2">
                  <Button
                    className="btn btn-sm btn-primary view-button"
                    text="View Team"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-2">
                  <h6>Team 2</h6>
                </div>
                <div className="col-md-2">
                  <Button
                    className="btn btn-sm btn-primary view-button"
                    text="View Team"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-2">
                  <h6>Match 1</h6>
                </div>
                <div className="col-md-2">
                  <Button
                    className="btn btn-sm btn-primary view-button"
                    text="Details"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-2">
              <div className="row mt-3">
                <div className="col-md-2">
                  <h6>Group A</h6>
                </div>
              </div>
              <div className="row mt-3 mb-3">
                <div className="col-md-4">
                  <h6>Group B</h6>
                </div>
              </div>
              <div className="row mt-4 mb-3">
                <div className="col-md-4">
                  <h6>Score</h6>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row mt-5">
                <div className="col-md-4">
                  <h6>Note</h6>
                </div>
              </div>
            </div>
          </div> */}

          <div className="row-md-5 bg-info">
              <div className="row">
                <div className="col-md-6 ps-4">
                    <div className="row mt-2">
                      <div className="col-md-4">
                      <h6>Team 1</h6>
                      </div>
                      <div className="col-md-6">
                      <Button
                      className="btn btn-sm btn-primary view-button"
                      text="View Team"
                      />
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-4">
                      <h6>Team 2</h6>
                      </div>
                      <div className="col-md-6">
                      <Button
                    className="btn btn-sm btn-primary view-button"
                    text="View Team"
                  />
                      </div>
                    </div>
                    <div className="row mt-2 mb-2">
                      <div className="col-md-4">
                      <h6>Team 3</h6>
                      </div>
                      <div className="col-md-6">
                      <Button
                    className="btn btn-sm btn-primary view-button"
                    text="View Team"
                  />
                      </div>
                    </div>
                </div>
                <div className="col-md-6 ps-4">
                  <div className="row mt-2">
                    <h6>Group A</h6>
                  </div>
                  <div className="row mt-3">
                    <h6>Group B</h6>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <h6>Score</h6>
                    </div>
                    <div className="col-md-6">
                    <h6>Note</h6>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          <div className="row-md-5 bg-info mt-3 ">
            <form>
              <div className="d-flex justify-content-end">
                <Button
                  className="btn btn-sm rounded-pill btn-primary ml-auto edit-button"
                  text="Edit"
                  icon={<PencilSquare />}
                />
              </div>
              <div className="row p-3">
                <div className="col-md-6">
                  <label htmlFor="forDate">Date</label>
                  <Textarea
                    type="date"
                    className="form-control form-control-sm"
                    id="forDate"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="city">City</label>
                  <Dropdown
                    className="form-control form-select dropdown-input-width"
                    id="city"
                    options={city}
                  />
                </div>
              </div>
              <div className="row p-3 py-0">
                <div className="col-md-6">
                  <label htmlFor="forTime">Time</label>
                  <Textarea
                    type="time"
                    className="form-control form-control-sm"
                    id="forTime"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="forStadium">Stadium</label>
                  <Dropdown
                    className="form-control form-select dropdown-input-width"
                    id="forStadium"
                    options={stadium}
                  />
                </div>
              </div>
              <div className="row mb-4 p-3">
                <div className="col-md-12  mb-4">
                  <label for="description">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    rows="3"
                    placeholder="Enter Description"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="col-md-6 mt-3 p-2 rounded-4  border mb-4 scrollable-calander">
          <Calander height="650px"/>
        </div>
      </div>
    </div>
  );
};

export default Tournamentname;
