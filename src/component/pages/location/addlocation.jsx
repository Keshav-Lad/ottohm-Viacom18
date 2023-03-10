import React from "react";
import Button from "../../common/button";
import Textarea from "../../common/textbox";
import "./addlocation.css";
const Addlocation = () => {
  return (
    <div className="container">
      <div className="breadcrumb">
        <span className="breadcrumb-item active">Location</span>
        <span className="breadcrumb-item active">&gt;&gt;</span>
        <span className="breadcrumb-item breadcrumb-1 pt-1"> Add Location</span>
      </div>
      <form>
        <div>
          <div className="row mt-4">
            <div className="col-md-6">
              <label htmlFor="locationID">Location Id</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4"
                id="locationID"
              ></Textarea>
            </div>
            <div className="col-md-6">
              <label htmlFor="locationName">Location Name</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4"
                id="locationName"
              ></Textarea>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-6">
              <label htmlFor="locationName">City</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4"
                id="locationName"
              ></Textarea>
            </div>
            <div className="col-md-6">
              <label htmlFor="locationName">Stadium</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4"
                id="locationName"
              ></Textarea>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-6">
              <label htmlFor="locationName">Contact Person</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4"
                id="locationName"
              ></Textarea>
            </div>
            <div className="col-md-6">
              <label htmlFor="locationName">Contact Number</label>
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
            text="Add Location"
            className="btn btn-primary mt-5 button-add-location"
          />
          </div>
        </div>
      </form>
    </div>
  );
};
export default Addlocation;
