import React from "react";
import { useNavigate } from "react-router";
import Table from "../common/table";
import "./tournament.css";
import Button from "../common/button";
import constants from "../../utils/constants.json";

const Index=()=>{
  const navigate=useNavigate();
    const columns = [
        {
          name: "Sr.No",
          selector: row => row.TournamentID,
          sortable: true,
          style: {
            width: "90px",
          },
        },
        {
          name: "Tournament ID",
          selector: row => row.TournamentID,
          sortable: true,
          style: {
            width: "90px",
          },
        },
        {
          name: "Tournament Name",
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
          name: "Created on",
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

      const TournamentComponentLoad=()=>{
        navigate(constants.tournamentname)
      }

    return(
      <div className="container rounded-3 mt-3">
      <div className="row ms-2 me-2 ">
        
        <div className="col-md-6  ps-3">
          <h5 className="textbold" >Tournaments</h5>
        </div>
        <div className="col-md-4 "></div>
        <div className="col-md-2 pe-4">
        <Button text="Create Tournament"className="form-control btn primary-btn textboldbtn" onClick={() => navigate(constants.addtournament)}></Button>
          
        </div>
      </div>
      <Table columns={columns} componentCall={TournamentComponentLoad}/>
    </div>
    );

}
export default Index;