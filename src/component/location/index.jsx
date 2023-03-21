import React from "react";
import { useNavigate } from "react-router";
import Button from "../common/button";
import Table from "../common/table";
import "./location.css";
import constants from "../../utils/constants.json";

const Index = () => {


  const navigate=useNavigate();
  const columns = [
    {
      name: "Location ID",
      selector: row => row.TournamentID,
      sortable: true,
      style: {
        width: "90px",
      },
    },
    {
      name: "Location Name",
      selector: row => row.TournamentID,
      sortable: true,
      style: {
        width: "90px",
      },
    },
    {
      name: "Location City",
      selector: row => row.TournamentDate,
      sortable: true,
      style: {
        width: "90px",
      },
    },
    {
      name: "Stadium Name",
      selector: row => row.TournamentName,
      sortable: true,
      style: {
        width: "90px",
      },
    },
    {
      name: "Contact Person",
      selector: row => row.CreatedBy,
      sortable: true,
      style: {
        width: "90px",
      },
    },
    {
      name: "Contact No",
      selector: row => row.CreatedBy,
      sortable: true,
      style: {
        width: "90px",
      },
    },
    {
      name: "Action",
      cell: () => (
        <div>
            {/* <button className="btn"><img src={Eye} alt="Eye"/></button>
            <button className="btn"><img src={Edit} alt="Edit"/></button> */}
        </div>
      ),
      style: {
        width: "90px",
      },
    },
  ];
  return (
    <div className="container rounded-3 mt-3">
    <div className="row ms-2 me-2 ">
      
      <div className="col-md-10  ps-3">
        <h5 className="textbold">Location</h5>
      </div>
      {/* <div className="col-md-4 "></div> */}
      <div className="col-md-2 d-flex justify-content-end pe-4">
      <Button text="Add Location"className="form-control btn primary-btn textboldbtn btn-tablet-index-location-btn-view" onClick={() => navigate(constants.addlocation)}/>
        
      </div>
    </div>
    <Table columns={columns}/>
  </div>
  );
};

export default Index;
