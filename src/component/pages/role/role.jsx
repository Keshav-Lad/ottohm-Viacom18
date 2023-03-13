import React from "react";
import Button from "../../common/button";
import Table from "../../common/tables/table";
import "./role.css";
const Role = () => {
  const headers = [
    "Role ID",
    "Role Name",
    "Created By",
    "Created On",
    "Description",
    "Action",
  ];
  const data = [
    ["101", "Job Name 1", "Ramesh", "04/01/2022", "Role Description", "-"],
    ["102", "Job Name 2", "Vaibhav", "04/01/2022", "Role Description", "-"],
  ];
  return (
    <div className="container-fluid">
      <div className="row mt-3 ">
        <div className="col-md-6">
          <div className="row">
            <div className="breadcrumb">
              <span className="breadcrumb-item breadcrumb-1 pt-1">Role</span>
            </div>
          </div>
        </div>
        <div className="col-md-6  justify-content-end ">
          {/* <div className="row add-role-wrapper"> */}
            <Button text="Add Role" className="btn btn-primary" />
          {/* </div> */}
        </div>
      </div>
      <div className="container-fluid">
      <div className="row mt-3 rounded rounded-0">
        <Table
          headers={headers}
          data={data}
          className="table-dark"
          mainTableClassName="table table-bordered"
        />
      </div>
      </div>
      
    </div>
  );
};

export default Role;
