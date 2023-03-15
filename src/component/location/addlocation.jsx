import React from "react";
import Button from "../common/button";
import Dropdown from "../common/dropdown";
import Textarea from "../common/textbox";
import "./addlocation.css";
import Breadcrumbs from "../common/breadcrumb";
import { useNavigate } from "react-router-dom";
const Addlocation = () => {
  const navigate=useNavigate();
  return (
    <div className="container mt-4 ps-3">
      <Breadcrumbs title="Location" subtitle="AddLocation" onClick={() => navigate("/location")}/>
      <form>
        <div>
          <div className="row mt-4">
            <div className="col-md-4">
              <label htmlFor="locationID">Location Id</label>
              <Dropdown
                className="form-control form-select mt-2 mb-4 textnormal"
                id="locationID"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="locationName">Location Name</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4 textnormal"
                id="locationName"
              ></Textarea>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-4">
              <label htmlFor="locationName">City</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4 textnormal"
                id="locationName"
              ></Textarea>
            </div>
            <div className="col-md-4">
              <label htmlFor="locationName">Stadium</label>
              <Dropdown
                className="form-control form-select mt-2 mb-4 textnormal"
                id="locationName"
              ></Dropdown>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-4">
              <label htmlFor="locationName">Contact Person</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4 textnormal"
                id="locationName"
              ></Textarea>
            </div>
            <div className="col-md-4">
              <label htmlFor="locationName">Contact Number</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4 textnormal"
                id="locationName"
              ></Textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Button
              text="Add Location"
              className="btn btn-primary mt-3 button-add-location textboldbtn"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
export default Addlocation;
