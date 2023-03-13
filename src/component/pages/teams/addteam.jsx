import React from 'react'
import Button from "../../common/button";
import Dropdown from "../../common/dropdown";
import Textarea from "../../common/textbox";
import "./addteam.css"
const Addteam = () => {
  return (
    <div className="container">
      <div className="breadcrumb">
        <span className="breadcrumb-item">Teams</span>
        <span className="breadcrumb-item ">&gt;&gt;</span>
        <span className="breadcrumb-item breadcrumb-1 pt-1"> Add Team</span>
      </div>
      <form>
        <div>
          <div className="row mt-4">
            <div className="col-md-6">
              <label htmlFor="locationID">Team ID</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4"
                id="locationID"
              ></Textarea>
            </div>
            <div className="col-md-6">
              <label htmlFor="locationName">Team Name</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4"
                id="locationName"
              ></Textarea>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-6">
              <label htmlFor="locationName">Team Manager</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4"
                id="locationName"
              ></Textarea>
            </div>
            <div className="col-md-6">
              <label htmlFor="locationName">Created By</label>
              <Dropdown
                className="form-control form-select mt-2 mb-4"
                id="locationName"
              ></Dropdown>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-6">
              <label htmlFor="locationName">Created Date</label>
              <Textarea
              text="text"
              className="form-control mt-2 mb-4"
              id="locationName"
            ></Textarea>
            </div>
            <div className="col-md-6">
            <label htmlFor="locationName">Team Members</label>
            <Textarea
              text="text"
              className="form-control mt-2 mb-4"
              id="locationName"
            ></Textarea>
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Button
              text="Add Team"
              className="btn btn-primary mt-5 button-add-location"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Addteam