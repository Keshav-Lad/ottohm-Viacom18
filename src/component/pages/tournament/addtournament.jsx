import React from "react";
import Button from "../../common/button";
import Dropdown from "../../common/dropdown";
import Textarea from "../../common/textbox";
const Addtournament = () => {
  return (
    <div className="container">
      <form action="">
        <div className="breadcrumb">
          <span className="breadcrumb-item">Tournaments</span>
          <span className="breadcrumb-item ">&gt;&gt;</span>
          <span className="breadcrumb-item breadcrumb-1 pt-1">
            Create Tournament
          </span>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="row">
              <div className="col">
                <label htmlFor="locationID">Tournament ID</label>
                <Textarea
                  text="text"
                  className="form-control mt-2 mb-4"
                  id="locationID"
                ></Textarea>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="noOfTeams">No. of Team</label>
                <Dropdown
                  className="form-control form-select mt-2 mb-4"
                  id="noOfTeams"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="noOfGroup">No. of Group</label>
                <Dropdown
                  className="form-control form-select mt-2 mb-4"
                  id="noOfGroup"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="country">Country</label>
                <Dropdown
                  className="form-control form-select mt-2 mb-4"
                  id="country"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="typeOfLeagues">Type of Leagues</label>
                <Dropdown
                  className="form-control form-select mt-2 mb-4"
                  id="typeOfLeagues"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col">
                <label htmlFor="locationID">Tournament Name</label>
                <Textarea
                  text="text"
                  className="form-control mt-2 mb-4"
                  id="locationID"
                ></Textarea>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="startDate">Start Date</label>
                <Dropdown
                  className="form-control form-select mt-2 mb-4"
                  id="startDate"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="endDate">End Date</label>
                <Dropdown
                  className="form-control form-select mt-2 mb-4"
                  id="endDate"
                />
              </div>
            </div>
            <div className="col">
              <label htmlFor="city">City</label>
              <Dropdown
                className="form-control form-select mt-2 mb-4"
                id="city"
              />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="con-md-12">
            <label htmlFor="locationID">Tournament Name</label>

            {/* Space for file upload menu */}

            <Textarea
              text="text"
              className="form-control mt-2 mb-4"
              id="locationID"
              placeholder="Space for file upload"
            ></Textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Button
              text="Create Schedule"
              className="btn btn-primary mt-5 button-add-location"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addtournament;
