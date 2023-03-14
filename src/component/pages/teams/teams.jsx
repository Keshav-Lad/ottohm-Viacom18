import React from "react";
import Table from "../../common/tables/table";
import Button from "../../common/button";
import { useNavigate } from "react-router";
const Teams=()=>{
  const navigate=useNavigate();

    const columns = [
        {
          name: "Team ID",
          selector: row => row.TournamentID,
          sortable: true,
          style: {
            width: "90px",
          },
        },
        {
          name: "Team Name",
          selector: row => row.TournamentID,
          sortable: true,
          style: {
            width: "90px",
          },
        },
        {
          name: "Team Manager",
          selector: row => row.TournamentDate,
          sortable: true,
          style: {
            width: "90px",
          },
        },
        {
          name: "Created By",
          selector: row => row.TournamentName,
          sortable: true,
          style: {
            width: "90px",
          },
        },
        {
          name: "Created On",
          selector: row => row.CreatedBy,
          sortable: true,
          style: {
            width: "90px",
          },
        },
        {
            name: "Team Members",
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
          <h5>Teams</h5>
        </div>
        <div className="col-md-4 "></div>
        <div className="col-sm-2 pe-4">
        <Button text="Add Teams"className="form-control btn btn-secondary" onClick={() => navigate("/teams/addteams")}></Button>
     
          
        </div>
      </div>
      <Table columns={columns}/>
    </div>
    )
}
export default Teams;