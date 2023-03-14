import React from "react";
import Table from "../../common/tables/table";
import { useNavigate } from "react-router";
import Button from "../../common/button";
const User=()=>{
  const navigate=useNavigate();
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
      <div className="container rounded-3 mt-3">
      <div className="row ms-2 me-2 ">
        
        <div className="col-md-6  ps-3">
          <h5>User</h5>
        </div>
        <div className="col-md-4 "></div>
        <div className="col-sm-2 pe-4">
        <Button text="Add User"className="form-control btn btn-secondary" onClick={() => navigate("/users/adduser")}></Button>
     
          
        </div>
      </div>
      <Table columns={columns}/>
    </div>
    )
}
export default User;