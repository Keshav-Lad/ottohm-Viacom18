import React from 'react'
import Button from "../common/button";
import Dropdown from "../common/dropdown";
import Textarea from "../common/textbox";
import "./addteam.css"
import Breadcrumbs from '../common/breadcrumb';
import { useNavigate } from 'react-router-dom';
import constants from "../../utils/constants.json";
import { useState,useEffect,useMemo } from 'react';

const Addteam = () => {
  const navigate=useNavigate()
  //Created By
  const[createdByData, setCreatedByData]=useState([])
  const createdByDataDropdown = useMemo(() => ['option 1','option 2','option 3','option 4'], [])
  useEffect(()=>{
    setCreatedByData(createdByDataDropdown);
  },[createdByDataDropdown])
  return (
    <div className="container mt-3 ps-3">
       
        <Breadcrumbs  title="Teams" subtitle="AddTeam" onClick={() => navigate(constants.teams)}/>
      <form>
        <div>
          <div className="row mt-4">
            <div className="col-md-4">
              <label htmlFor="locationID">Team ID</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4 textnormal"
                id="locationID"
              ></Textarea>
            </div>
            <div className="col-md-4">
              <label htmlFor="locationName">Team Name</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4 textnormal"
                id="locationName"
              ></Textarea>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-4">
              <label htmlFor="locationName">Team Manager</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4 textnormal"
                id="locationName"
              ></Textarea>
            </div>
            <div className="col-md-4">
              <label htmlFor="locationName">Created By</label>
              <Dropdown
                className="form-control form-select mt-2 mb-4 textnormal"
                id="locationName"
                options={createdByData}
              ></Dropdown>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-4">
              <label htmlFor="locationName">Created Date</label>
              <Textarea
              text="text"
              className="form-control mt-2 mb-4 textnormal"
              id="locationName"
            ></Textarea>
            </div>
            <div className="col-md-4">
            <label htmlFor="locationName">Team Members</label>
            <Textarea
              text="text"
              className="form-control mt-2 mb-4 textnormal"
              id="locationName"
            ></Textarea>
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
            <Button
              text="Add Team"
              className="btn form-control secondary-btn  mt-4 textboldbtn"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Addteam