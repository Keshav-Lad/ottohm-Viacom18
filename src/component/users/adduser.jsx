import React from "react";
import Button from "../common/button";
import Dropdown from "../common/dropdown";
import Textarea from "../common/textbox";
import "./adduser.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
const Adduser = () => {
  return (
    <div className="container mt-3  ps-3">
     <Breadcrumb>
          <Breadcrumb.Item href="/us">
            <span className="bcrum  text-nowrap">User</span>
          </Breadcrumb.Item>
          <span className="active-item  me-2 textbold">&gt;&gt;</span>
          <Breadcrumb.Item className="active-item textbold">
            Add User
          </Breadcrumb.Item>
        </Breadcrumb>
      <form>
        <div>
          <div className="row mt-4">
            <div className="col-md-4">
              <label htmlFor="locationID">User Id</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4 textnormal"
                id="locationID"
              ></Textarea>
            </div>
            <div className="col-md-4">
              <label htmlFor="locationName">User Name</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4 textnormal"
                id="locationName"
              ></Textarea>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-4">
              <label htmlFor="locationName">Added Date</label>
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
              ></Dropdown>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-4">
              <label htmlFor="locationName">User Role</label>
              <Dropdown
                className="form-control form-select mt-2 mb-4 textnormal"
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
          <div className="col-md-4">
            <Button
              text="Add User"
              className="btn btn-primary mt-5 button-add-location textboldbtn"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Adduser;
