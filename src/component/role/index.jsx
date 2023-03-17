import React from "react";
import { useNavigate } from "react-router";
import Button from "../common/button";
import Table from "../common/table";
import './role.css';
import constants from "../../utils/constants.json";

const Index = () => {
  
  const navigate=useNavigate();
  const columns = [
    {
      name: "Role ID",
      selector: row => row.TournamentID,
      sortable: true,
      style: {
        width: "90px",
      },
    },
    {
      name: "Role Name",
      selector: row => row.TournamentID,
      sortable: true,
      style: {
        width: "90px",
      },
    },
    {
      name: "Created By",
      selector: row => row.TournamentDate,
      sortable: true,
      style: {
        width: "90px",
      },
    },
    {
      name: "Created On",
      selector: row => row.TournamentName,
      sortable: true,
      style: {
        width: "90px",
      },
    },
    {
      name: "Description",
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
  return(
    <div className="container rounded-3 mt-3">
      <div className="row ms-2 me-2 ">
        
        <div className="col-md-6  ps-3">
          <h5 className="textbold">Role</h5>
        </div>
        <div className="col-md-4 "></div>
        <div className="col-sm-2 pe-4">
        <Button text="Add Role"className="form-control primary-btn btn textboldbtn rounded-5" onClick={() => navigate(constants.addrole)}></Button>
     
          
        </div>
      </div>
      <Table columns={columns}/>
    </div>
  )
};

export default Index;
