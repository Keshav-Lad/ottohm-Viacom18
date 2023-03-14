import React from "react";
import Button from "../../common/button";
import Dropdown from "../../common/dropdown";
import Textarea from "../../common/textbox";
import Dropzone from "../../common/Dropzone";
import DashBoardTable from "../../common/tables/table";
import "./addtournament.css"
import Calander from "../../common/calander";
import FormCard from "../../common/formCard";
import download from "../../../utils/icons/download.svg"
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
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="row">
                <div className="col-md-3">
                  <p>Upload Team Details</p>
                </div>
                
                <div className="col-md-9 d-flex justify-content-end">
                  <Button text="Sample Information Details" className="btn  sample-download-button"/><span><img src={download} className="download-img mt-2" alt="download img" /></span>
                </div>
            </div>
            {/* <label htmlFor="locationID">Upload Team Details</label> */}
            <Dropzone />

            <div className="col-md-2">
              <Button
                text="Create Schedule"
                className="btn btn-primary mt-4 mb-4 form-control"
              />
            </div>

            <DashBoardTable />
            <div className="container">
            <div className="row mt-5 mb-1">
            <div className="col-md-6 scrollable-div">
             
              <FormCard/>
              <FormCard/>
              <FormCard/>
              <FormCard/>
             
            </div>

            <div className="col-md-6">
              <Calander/>
            </div>
            <div className="col-md-2 mt-2">
              <Button
                text="Create Tournament"
                className="btn btn-primary mt-4 mb-4 form-control"
              />
            </div>
            </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addtournament;
