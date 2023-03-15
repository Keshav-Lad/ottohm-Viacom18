import React from "react";
import Button from "../common/button";
import Dropdown from "../common/dropdown";
import Textarea from "../common/textbox";
import Dropzone from "../common/Dropzone";
import Table from "../common/table";
import "./addtournament.css";
import Calander from "../common/calander";
import FormCard from "./formCard";
import download from "../../utils/icons/download.svg";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const Addtournament = () => {
  return (
  <div className="container ps-3 mt-3">
          
          <Breadcrumb>
          <Breadcrumb.Item href="/tournaments">
            <span className="textmedium">Tournaments</span>
          </Breadcrumb.Item>
          <span className="active-item me-2 ms-1 textbold mt-1">&gt;&gt;</span>
          <Breadcrumb.Item className="active-item textbold mt-1">
            Create Tournament
          </Breadcrumb.Item>
        </Breadcrumb>
          
      
      <form action="">
        <div>
        <div className="row mt-5">
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-10">
                <label id="inttextmedium" htmlFor="locationID">Tournament ID</label>
                <Textarea
                  text="text"
                  className="form-control mt-2 mb-4  textnormal"
                  id="locationID"
                ></Textarea>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <label id="inttextmedium" htmlFor="noOfTeams">No. of Team</label>
                <Dropdown
                  className="form-control form-select mt-2 mb-4 textnormal"
                  id="noOfTeams"
                />
              </div>
              <div className="col-md-5">
                <label id="inttextmedium" htmlFor="noOfGroup">No. of Group</label>
                <Dropdown
                  className="form-control form-select mt-2 mb-4 textnormal"
                  id="noOfGroup"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-10">
                <label id="inttextmedium" htmlFor="country">Country</label>
                <Dropdown
                  className="form-control form-select mt-2 mb-4 textnormal"
                  id="country"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-10">
                <label id="inttextmedium" htmlFor="typeOfLeagues">Type of Schedule</label>
                <Dropdown
                  className="form-control form-select mt-2 mb-4 textnormal"
                  id="typeOfLeagues"
                />
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-10">
                <label id="inttextmedium" htmlFor="locationID">Tournament Name</label>
                <Textarea
                  text="text"
                  className="form-control mt-2 mb-4 textnormal"
                  id="locationID"
                ></Textarea>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <label id="inttextmedium" htmlFor="startDate">Start Date</label>
                <Dropdown
                  className="form-control form-select mt-2 mb-4 textnormal"
                  id="startDate"
                />
              </div>
              <div className="col-md-5">
                <label id="inttextmedium" htmlFor="endDate">End Date</label>
                <Dropdown
                  className="form-control form-select mt-2 mb-4 textnormal"
                  id="endDate"
                />
              </div>
            </div>
            <div className="col-md-10">
              <label id="inttextmedium" htmlFor="city">City</label>
              <Dropdown
                className="form-control form-select mt-2 mb-4 textnormal"
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
                <p className="textbold">Upload Team Details</p>
              </div>

              <div className="col-md-7 d-flex justify-content-end">
                <Button
                  text="Sample Information Files "
                  className="btn sample-download-button textbold"
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
                className="btn btn-primary mt-4 mb-4 form-control textboldbtn"
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

                <div className="col-md-5 border rounded-4 scrollable-calander" id="calander-padding">
                  <Calander />
                </div>
                <div className="col-md-3 mt-2">
                  <Button
                    text="Create Tournament"
                    className="btn btn-primary mt-4 mb-4 form-control textboldbtn"
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
