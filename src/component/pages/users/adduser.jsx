import React from "react";
import Button from "../../common/button";
import Dropdown from "../../common/dropdown";
import Textarea from "../../common/textbox";
import "./adduser.css";
const Adduser = () => {
  return (
    <div className="container">
      <div className="breadcrumb">
        <span className="breadcrumb-item">User</span>
        <span className="breadcrumb-item ">&gt;&gt;</span>
        <span className="breadcrumb-item breadcrumb-1 pt-1"> Add User</span>
      </div>
      <form>
        <div>
          <div className="row mt-4">
            <div className="col-md-6">
              <label htmlFor="locationID">User Id</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4"
                id="locationID"
              ></Textarea>
            </div>
            <div className="col-md-6">
              <label htmlFor="locationName">User Name</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4"
                id="locationName"
              ></Textarea>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-6">
              <label htmlFor="locationName">Added Date</label>
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
              <label htmlFor="locationName">User Role</label>
              <Dropdown
                className="form-control form-select mt-2 mb-4"
                id="locationName"
              />
            </div>
            {/* <div className="col-md-6">
            <label htmlFor="locationName">Contact Number</label>
            <Textarea
              text="text"
              className="form-control mt-2 mb-4"
              id="locationName"
            ></Textarea>
          </div> */}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Button
              text="Add Location"
              className="btn btn-primary mt-5 button-add-location"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Adduser;
