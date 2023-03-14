import React from "react";
import Button from "../../common/button";
import Dropdown from "../../common/dropdown";
import Textarea from "../../common/textbox";
import Dropzone from "../../common/Dropzone";
import Table from "../../common/tables/table";
import "./addtournament.css";
import Calander from "../../common/calander";
import FormCard from "../../common/formCard";
import download from "../../../utils/icons/download.svg";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const Addtournament = () => {
  return (
  <div className="container ps-3 mt-3">
          
          <Breadcrumb>
          <Breadcrumb.Item href="/tournaments">
            <span className="bcrum  text-nowrap">Tournament</span>
          </Breadcrumb.Item>
          <span className="active-item  me-2">&gt;&gt;</span>
          <Breadcrumb.Item className="active-item">
            Create Tournament
          </Breadcrumb.Item>
        </Breadcrumb>
          
      
      <form action="">
        <div>
        <div className="row mt-5">
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-10">
                <label htmlFor="locationID">Tournament ID</label>
                <Textarea
                  text="text"
                  className="form-control mt-2 mb-4"
                  id="locationID"
                ></Textarea>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <label htmlFor="noOfTeams">No. of Team</label>
                <Dropdown
                  className="form-control form-select mt-2 mb-4"
                  id="noOfTeams"
                />
              </div>
              <div className="col-md-5">
                <label htmlFor="noOfGroup">No. of Group</label>
                <Dropdown
                  className="form-control form-select mt-2 mb-4"
                  id="noOfGroup"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-10">
                <label htmlFor="country">Country</label>
                <Dropdown
                  className="form-control form-select mt-2 mb-4"
                  id="country"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-10">
                <label htmlFor="typeOfLeagues">Type of Schedule</label>
                <Dropdown
                  className="form-control form-select mt-2 mb-4"
                  id="typeOfLeagues"
                />
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-10">
                <label htmlFor="locationID">Tournament Name</label>
                <Textarea
                  text="text"
                  className="form-control mt-2 mb-4"
                  id="locationID"
                ></Textarea>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <label htmlFor="startDate">Start Date</label>
                <Dropdown
                  className="form-control form-select mt-2 mb-4"
                  id="startDate"
                />
              </div>
              <div className="col-md-5">
                <label htmlFor="endDate">End Date</label>
                <Dropdown
                  className="form-control form-select mt-2 mb-4"
                  id="endDate"
                />
              </div>
            </div>
            <div className="col-md-10">
              <label htmlFor="city">City</label>
              <Dropdown
                className="form-control form-select mt-2 mb-4"
                id="city"
              />
            </div>
          </div>
        </div>
        </div>
        <div className="row mt-4 ">
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-4">
                <p>Upload Team Details</p>
              </div>

              <div className="col-md-7 d-flex justify-content-end">
                <Button
                  text="Sample Information Files"
                  className="btn  sample-download-button"
                />
                <span>
                  <img
                    src={download}
                    className="download-img mt-2"
                    alt="download img"
                  />
                </span>
              </div>
            </div>
            {/* <label htmlFor="locationID">Upload Team Details</label> */}
            <div className="row">
                <div className="col-md-11">
                <Dropzone />
                </div>
            </div>


            <div className="col-md-2">
              <Button
                text="Create Schedule"
                className="btn btn-primary mt-4 mb-4 form-control"
              />
            </div>
            <div className="row">
              <div className="col-md-11">
                <Table/>
              </div>
            </div>

           
            <div className="container">
              <div className="row mt-5 mb-1">
                <div className="col-md-6  scrollable-div">
                  <FormCard />
                  <FormCard />
                  <FormCard />
                  <FormCard />
                </div>

                <div className="col-md-5 ms-2  border rounded-4">
                  <Calander />
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
