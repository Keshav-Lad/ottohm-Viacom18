import React from "react";
import Button from "../../common/button";
import Dropdown from "../../common/dropdown";
import Textarea from "../../common/textbox";
import Calander from "../../common/calander";
import { PencilSquare } from "react-bootstrap-icons";
import "./tournamentname.css";
const Tournamentname = () => {
  return (
    <div className="container">
      <div className="breadcrumb">
        <span className="breadcrumb-item">Tournaments</span>
        <span className="breadcrumb-item ">&gt;&gt;</span>
        <span className="breadcrumb-item breadcrumb-1 pt-1">
          Tournament Name
        </span>
      </div>
21
      <div className="row mt-4 ">
        <div className="col-md-6">
          <div className="row">
            <div className="col">
              <label htmlFor="locationID">Tournament ID</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4"
                id="locationID"
              ></Textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <label htmlFor="locationName">Date</label>
              <Textarea
                text="Date"
                className="form-control mt-2 mb-4"
                id="locationName"
              ></Textarea>
            </div>
          </div>

          <div className="row tournament-details mt-4">
            <div className="col-md-5">
              <div className="row mt-3">
                <div className="col ">
                  <h6>Team 1</h6>
                </div>
                <div className="col">
                  <Button
                    className="btn btn-sm btn-primary view-button"
                    text="View Team"
                  />
                </div>
              </div>
              <div className="row mt-3 mb-3">
                <div className="col ">
                  <h6>Team 2</h6>
                </div>
                <div className="col">
                  <Button
                    className="btn btn-sm btn-primary view-button"
                    text="View Team"
                  />
                </div>
              </div>
              <div className="row mt-3 mb-3">
                <div className="col ">
                  <h6>Match 1</h6>
                </div>
                <div className="col">
                  <Button
                    className="btn btn-sm btn-primary view-button"
                    text="Details"
                  />
                </div>
              </div>
            </div>

            <div className="col">
              <div className="row mt-3">
                <div className="col">
                  <h6>Group A</h6>
                </div>
              </div>
              <div className="row mt-3 mb-3">
                <div className="col">
                  <h6>Group B</h6>
                </div>
              </div>
              <div className="row mt-4 mb-3">
                <div className="col">
                  <h6>Score</h6>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row mt-5">
                <div className="col">
                  <h6>Note</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="row tournament-details mt-4">
            <form>
              <div className="d-flex justify-content-end">
                <Button
                  className="btn btn-sm rounded-pill btn-primary ml-auto edit-button"
                  text="Edit"
                  icon={<PencilSquare />}
                />
              </div>
              <div className="row">
                <div className="col px-5 py-3">
                  <label htmlFor="forDate">Date</label>
                  <Textarea
                    text="date"
                    className="form-control input-filed-width"
                    id="forDate"
                  />
                </div>
                <div className="col px-5 py-3">
                  <label htmlFor="city">City</label>
                  <Dropdown
                    className="form-control form-select dropdown-input-width"
                    id="city"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col px-5 py-3">
                  <label htmlFor="forTime">Time</label>
                  <Textarea
                    text="time"
                    className="form-control input-filed-width"
                    id="forTime"
                  />
                </div>
                <div className="col px-5 py-3">
                  <label htmlFor="forStadium">Stadium</label>
                  <Dropdown
                    className="form-control form-select dropdown-input-width"
                    id="forStadium"
                  />
                </div>
              </div>
              <div className="row">
                <div className=" px-5 py-3">
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
        <div className="col-md-6 mt-4 calander">
          <Calander />
        </div>
      </div>
    </div>
  );
};

export default Tournamentname;
