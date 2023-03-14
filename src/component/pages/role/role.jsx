import React from "react";
import { useNavigate } from "react-router";
import Button from "../../common/button";
import DashBoardTable from "../../common/tables/table";

import './role.css'
const Role = () => {
  
  const navigate=useNavigate();
  return(
    <div className="container rounded-3 mt-3">
      <div className="row">
        <div className="col-md-4 mb-2 ps-3">
          <h5>Role</h5>
        </div>
        <div className="col-md-6 mb-2"></div>
        <div className="col-md-2 mb-2 ">
          <Button text="Add Role" className="form-control btn btn-secondary" onClick={() => navigate("/roles/AddRole")}></Button>
        </div>
      </div>
      <DashBoardTable/>
    </div>
  )
};

export default Role;
