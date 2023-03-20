import React from "react";
import Button from "../common/button";
import Dropdown from "../common/dropdown";
import Textarea from "../common/textbox";
import "./adduser.css";
import Breadcrumbs from "../common/breadcrumb";
import { useNavigate } from "react-router-dom";
import constants from "../../utils/constants.json";
import { useState, useEffect, useMemo } from "react";

const Adduser = () => {
  const navigate = useNavigate();
  //Created By
  const [createdByData, setCreatedByData] = useState([]);
  // const createdByDataDropdown = ['option 1','option 2','option 3','option 4']

  //user role
  const [userRole, setUserRole] = useState([]);
  // const userRoleDropdownData = ['Role 1','Role 2','Role 3','Role 4']

  const createdByDataDropdown = useMemo(
    () => ["option 1", "option 2", "option 3", "option 4"],
    []
  );
  const userRoleDropdownData = useMemo(
    () => ["Role 1", "Role 2", "Role 3", "Role 4"],
    []
  );

  useEffect(() => {
    setCreatedByData(createdByDataDropdown);
    setUserRole(userRoleDropdownData);
  }, [createdByDataDropdown, userRoleDropdownData]);

  return (
    <div className="container mt-3 ps-3">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          {" "}
          <Breadcrumbs
            title="User"
            subtitle="AddUser"
            onClick={() => navigate(constants.users)}
          />
        </div>
        <div className="col-md-1"></div>
      </div>
      <form>
        <div>
          <div className="row mt-4">
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <label htmlFor="locationID">User Id</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4 textnormal"
                id="locationID"
              ></Textarea>
            </div>
            <div className="col-md-5">
              <label htmlFor="locationName">User Name</label>
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
              <label htmlFor="locationName">Added Date</label>
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
              <label htmlFor="locationName">User Role</label>
              <Dropdown
                className="form-control form-select mt-2 mb-4 textnormal"
                id="locationName"
                options={userRole}
              />
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-2">
            <Button
              text="Add User"
              className="btn form-control secondary-btn mt-4"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Adduser;
