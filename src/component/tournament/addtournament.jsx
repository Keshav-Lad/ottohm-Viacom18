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
import Breadcrumbs from "../common/breadcrumb";
import { useNavigate } from "react-router-dom";
import constants from "../../utils/constants.json";
import { useState, useEffect, useMemo } from "react";

const Addtournament = () => {
  const navigate = useNavigate();

  const [noOfTeams, setnoOfTeams] = useState([]);
  const [noOfGroup, setnoOfGroup] = useState([]);
  const [country, setCountry] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [startDate, setStartDate] = useState([]);
  const [endDate, setEndDate] = useState([]);
  const [city, setCity] = useState([]);

  const noOfTeamsDropdownData = useMemo(
    () => ["team 1", "team 2", "team 3", "team 4", "team 5"],
    []
  );
  const noOfGroupDropdownData = useMemo(
    () => ["group 1", "group 2", "group 3", "group 4", "group 5"],
    []
  );
  const countryDropdownData = useMemo(
    () => ["India", "USA", "Japan", "Germany", "Brazil"],
    []
  );
  const scheduleDropdownData = useMemo(
    () => [
      "schedule 1",
      "schedule 2",
      "schedule 3",
      "schedule 4",
      "schedule 5",
    ],
    []
  );
  const startDateDropdownData = useMemo(
    () => [
      "startdate 1",
      "startdate 2",
      "startdate 3",
      "startdate 4",
      "startdate 5",
    ],
    []
  );
  const endDateDropdownData = useMemo(
    () => ["enddate 1", "enddate 2", "enddate 3", "enddate 4", "enddate 5"],
    []
  );
  const cityDropdownData = useMemo(
    () => ["city 1", "city 2", "city 3", "city 4", "city 5"],
    []
  );

  useEffect(() => {
    setnoOfTeams(noOfTeamsDropdownData);
    setnoOfGroup(noOfGroupDropdownData);
    setCountry(countryDropdownData);
    setSchedule(scheduleDropdownData);
    setStartDate(startDateDropdownData);
    setEndDate(endDateDropdownData);
    setCity(cityDropdownData);
  }, [
    noOfTeamsDropdownData,
    noOfGroupDropdownData,
    countryDropdownData,
    scheduleDropdownData,
    startDateDropdownData,
    endDateDropdownData,
    cityDropdownData,
  ]);
  return (
  <div className="container ps-4  mt-3">
          
      
          <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-5">
          <Breadcrumbs title="Tournaments" subtitle="Create Tournamenet" onClick={() => navigate(constants.tournaments)}/>
          </div>
          <div className="col-md-1"></div>
        </div>
       <div className="row mt-3">
       

       
        <div className="col-md-1"></div>
        <div className="col-md-5">
        <label id="inttextmedium" htmlFor="locationID">Tournament ID</label>
                <Textarea
                  text="text"
                  className="form-control mt-2 mb-4  textnormal"
                  id="locationID"
                ></Textarea>
        </div>
        <div className="col-md-5">
        <label id="inttextmedium" htmlFor="locationID">Tournament Name</label>
                <Textarea
                  text="text"
                  className="form-control mt-2 mb-4 textnormal"
                  id="locationID"
                ></Textarea>
        </div>
        <div className="col-md-1"></div>  
       </div>
       <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <div className="row">
            <div className="col-md-6">
            <label id="inttextmedium" htmlFor="noOfTeams">No. of Team</label>
                <Dropdown
                  className="form-control form-select mt-2 mb-4 textnormal"
                  id="noOfTeams"
                  options={noOfTeams}
                />
            </div>
            <div className="col-md-6">
            <label id="inttextmedium" htmlFor="noOfGroup">No. of Group</label>
                <Dropdown
                  className="form-control form-select mt-2 mb-4 textnormal"
                  id="noOfGroup"
                  options={noOfGroup}
                />
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="row">
          <div className="col-md-6">

          <label id="inttextmedium" htmlFor="startDate">Start Date</label>
                <Dropdown
                  className="form-control form-select mt-2 mb-4 textnormal"
                  id="startDate"
                  options={startDate}
                />
          </div>
          <div className="col-md-6">
          <label id="inttextmedium" htmlFor="endDate">End Date</label>
                <Dropdown
                  className="form-control form-select mt-2 mb-4 textnormal"
                  id="endDate"
                  options={endDate}
                />
          </div>
          </div>
        </div>
        <div className="col-md-1"></div>
       </div>
       <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-5">
        <label id="inttextmedium" htmlFor="country">Country</label>
                <Dropdown
                  className="form-control form-select mt-2 mb-4 textnormal"
                  id="country"
                  options={country}
                />
        </div>
        <div className="col-md-5">
        <label id="inttextmedium" htmlFor="city">City</label>
              <Dropdown
                className="form-control form-select mt-2 mb-4 textnormal"
                id="city"
                options={city}
              />
        </div>
        <div className="col-md-1"></div>
       </div>
       <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-5">
        <label id="inttextmedium" htmlFor="typeOfLeagues">Type of Schedule</label>
                <Dropdown
                  className="form-control form-select mt-2 mb-4 textnormal"
                  id="typeOfLeagues"
                  options={schedule}
                />
        </div>
        <div className="col-md-5"></div>
        <div className="col-md-1"></div>
       </div>
       
        
        <div className="row mt-4 ">
          <div className="col-md-1"></div>
          <div className="col-md-11">
            <div className="row">
              <div className="col-md-4" id="upload-team-text">
                <p className="textbold">Upload Team Details</p>
              </div>

              <div className="col-md-7 sample-info-file-btn">
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
                className="btn secondary-btn mt-4 mb-4 form-control textboldbtn btn-for-tablet-view"
              />
            </div>
            <div className="row">
              <div className="col-md-11">
                <Table />
              </div>
            </div>

            <div className="container">
              <div className="row mt-5 mb-1">
                <div className="col-md-6  scrollable-div">
                  <FormCard options={city} />
                  <FormCard options={city} />
                  <FormCard options={city} />
                  <FormCard options={city} />
                </div>

                <div
                  className="col-md-5 border rounded-4 scrollable-calander mt-3"
                  id="calander-padding"
                >
                  <Calander height="544px" />
                </div>
                <div className="col-md-3 mt-2">
                  <Button
                    text="Create Tournament"
                    className="btn secondary-btn mt-4 mb-4 form-control btn-for-tablet-view textboldbtn"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
     
    </div>
  );
};

export default Addtournament;
