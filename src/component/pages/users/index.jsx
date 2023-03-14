import React from "react";
import Table from "../../common/tables/table";
import "./users.css";

const index=()=>{

    const columns = [
        {
          name: "User ID",
          selector: row => row.TournamentID,
          sortable: true,
          style: {
            width: "90px",
          },
        },
        {
          name: "User Name",
          selector: row => row.TournamentID,
          sortable: true,
          style: {
            width: "90px",
          },
        },
        {
          name: "Added On",
          selector: row => row.TournamentDate,
          sortable: true,
          style: {
            width: "90px",
          },
        },
        {
          name: "User Role",
          selector: row => row.TournamentName,
          sortable: true,
          style: {
            width: "120px",
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
    return(
        <div>
            <Table columns={columns}/>
        </div>
    )
}
export default index;