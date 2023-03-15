import React from 'react'
import Button from "../common/button";
import Dropdown from "../common/dropdown";
import Textarea from "../common/textbox";
import "./addteam.css"
import Breadcrumbs from '../common/breadcrumb';
import { useNavigate } from 'react-router-dom';
import constants from "../../utils/constants.json";

const Addteam = () => {
  const navigate=useNavigate()
  return (
    <div className="container mt-3">
       
        <Breadcrumbs  title="Teams" subtitle="AddTeam" onClick={() => navigate(constants.teams)}/>
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