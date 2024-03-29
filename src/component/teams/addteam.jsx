import React from "react";
import Button from "../common/button";
import Dropdown from "../common/dropdown";
import Textarea from "../common/textbox";
import "./addteam.css";
import Breadcrumbs from "../common/breadcrumb";
import { useNavigate } from "react-router-dom";
import constants from "../../utils/constants.json";
import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newMessage,increaseNotificationCounter } from "../../utils/reducer/notificationreducer";
const Addteam = () => {

  //add the new notification everytime clicked on add team button
  const dispatch =useDispatch();
  const navigate = useNavigate();
  const message = useSelector((state)=> state.notification.message)
  const counterRedux = useSelector((state)=>state.notification.notificationCounter)
  const notificationMessageView = 'Team Added Successfully '

  const handleNotification = ()=>{
    dispatch(newMessage(notificationMessageView));
    dispatch(increaseNotificationCounter());
  }

  console.log(counterRedux);
  console.log(message);

  
  //Created By
  const [createdByData, setCreatedByData] = useState([]);
  const createdByDataDropdown = useMemo(
    () => ["option 1", "option 2", "option 3", "option 4"],
    []
  );
  useEffect(() => {
    setCreatedByData(createdByDataDropdown);
  }, [createdByDataDropdown]);
  return (
    <div className="container mt-3 ps-3">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          {" "}
          <Breadcrumbs
            title="Teams"
            subtitle="AddTeam"
            onClick={() => navigate(constants.teams)}
          />
        </div>
        <div className="col-md-1"></div>
      </div>
      <form onSubmit={(e)=> e.preventDefault()}>
        <div>
          <div className="row mt-4">
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <label htmlFor="locationID">Team ID</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4 textnormal"
                id="locationID"
              ></Textarea>
            </div>
            <div className="col-md-5">
              <label htmlFor="locationName">Team Name</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4 textnormal"
                id="locationName"
              ></Textarea>
            </div>
            <div className="col-md-1"></div>
          </div>
          <div className="row mt-2">
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <label htmlFor="locationName">Team Manager</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4 textnormal"
                id="locationName"
              ></Textarea>
            </div>
            <div className="col-md-5">
              <label htmlFor="locationName">Created By</label>
              <Dropdown
                className="form-control form-select mt-2 mb-4 textnormal"
                id="locationName"
                options={createdByData}
              ></Dropdown>
            </div>
            <div className="col-md-1"></div>
          </div>
          <div className="row mt-2">
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <label htmlFor="locationName">Created Date</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4 textnormal"
                id="locationName"
              ></Textarea>
            </div>
            <div className="col-md-5">
              <label htmlFor="locationName">Team Members</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4 textnormal"
                id="locationName"
              ></Textarea>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-2">
            <Button
              text="Add Team"
              className="btn form-control secondary-btn btn-tablet-view mt-4 textSecondryBtn"
              onClick={handleNotification}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addteam;
