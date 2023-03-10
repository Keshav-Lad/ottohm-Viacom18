import React from "react";
import Button from "../../common/button";
import Textarea from '../../common/textbox'
const Addlocation = () => {
  return (
    <div className="container">
        <div className="breadcrumb">
            <span className="breadcrumb-item active">Location</span>
            <span className="breadcrumb-item active">&gt;&gt;</span>
            <span className="breadcrumb-item active">Add Location</span>
        </div>
      <form>
        <div>
          <div className="row mt-4">
            <div className="col-md-6">
              <label htmlFor="locationID">Location Id</label>
              <Textarea
                text="text"
                className="form-control mt-2"
                id="locationID"
              ></Textarea>
            </div>
            <div className="col-md-6">
              <label htmlFor="locationName">Location Name</label>
              <Textarea
                text="text"
                className="form-control mt-2"
                id="locationName"
              ></Textarea>
            </div>
          </div>
          <div className="row mt-4">
          <div className="col-md-6">
              <label htmlFor="locationName">City</label>
              <Textarea
                text="text"
                className="form-control mt-2"
                id="locationName"
              ></Textarea>
            </div>
            <div className="col-md-6">
              <label htmlFor="locationName">Stadium</label>
              <Textarea
                text="text"
                className="form-control mt-2"
                id="locationName"
              ></Textarea>
            </div>
          </div>
          <div className="row mt-4">
          <div className="col-md-6">
              <label htmlFor="locationName">Contact Person</label>
              <Textarea
                text="text"
                className="form-control mt-2"
                id="locationName"
              ></Textarea>
            </div>
            <div className="col-md-6">
              <label htmlFor="locationName">Contact Number</label>
              <Textarea
                text="text"
                className="form-control mt-2"
                id="locationName"
              ></Textarea>
            </div>
          </div>
        </div>
      </form>
      <Button text="Add Location" />
    </div>
  );
};
export default Addlocation;
