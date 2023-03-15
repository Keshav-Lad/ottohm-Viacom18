import React from 'react'
import Button from "../common/button";
import Dropdown from "../common/dropdown";
import Textarea from "../common/textbox";
import "./addteam.css"
import Breadcrumb from "react-bootstrap/Breadcrumb";

const Addteam = () => {
  return (
    <div className="container mt-3">
       <Breadcrumb>
          <Breadcrumb.Item href="/teams">
            <span className="bcrum ext-nowrap">Teams </span>
          </Breadcrumb.Item>
          <span className="active-item ms-1 me-2 textbold">&gt;&gt;</span>
          <Breadcrumb.Item className="active-item textbold">
            Add Teams
          </Breadcrumb.Item>
        </Breadcrumb>
      <form>
        <div>
          <div className="row mt-4">
            <div className="col-md-4">
              <label htmlFor="locationID">Team ID</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-2 textnormal"
                id="locationID"
              ></Textarea>
            </div>
            <div className="col-md-4">
              <label htmlFor="locationName">Team Name</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-2 textnormal"
                id="locationName"
              ></Textarea>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-4">
              <label htmlFor="locationName">Team Manager</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-2 textnormal"
                id="locationName"
              ></Textarea>
            </div>
            <div className="col-md-4">
              <label htmlFor="locationName">Created By</label>
              <Dropdown
                className="form-control form-select mt-2 mb-2 textnormal"
                id="locationName"
              ></Dropdown>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-4">
              <label htmlFor="locationName">Created Date</label>
              <Textarea
              text="text"
              className="form-control mt-2 mb-2 textnormal"
              id="locationName"
            ></Textarea>
            </div>
            <div className="col-md-4">
            <label htmlFor="locationName">Team Members</label>
            <Textarea
              text="text"
              className="form-control mt-2 mb-2 textnormal"
              id="locationName"
            ></Textarea>
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Button
              text="Add Team"
              className="btn btn-primary mt-3 button-add-location textboldbtn"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Addteam