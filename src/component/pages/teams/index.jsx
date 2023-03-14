import React from "react";
import Table from "../../common/tables/table";
import "./teams.css";

const Index=()=>{


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
        <div>
            <Table columns={columns}/>
        </div>
    )
}
export default Index;