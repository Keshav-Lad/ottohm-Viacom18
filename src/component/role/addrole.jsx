import React from "react";
import Textarea from "../common/textbox";
import Button from "../common/button";
import "./addrole.css";
import { useNavigate } from "react-router";
import Breadcrumbs from "../common/breadcrumb";
import constants from "../../utils/constants.json";
import Table from '../common/table';

const Addrole = () => {
  const navigate=useNavigate();
  return (
    <div className="container mt-3">
      <Breadcrumbs title="Role" subtitle="AddRole" onClick={() => navigate(constants.roles)}/>
      <form>
        <div>
          <div className="row mt-4">
            <div className="col-md-4">
              <label htmlFor="locationID">Role Id</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4 textnormal"
                placeholder="101"
                id="locationID"
              ></Textarea>
            </div>
            <div className="col-md-4">
              <label htmlFor="locationName">Role Name</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4 textnormal"
                placeholder="Enter Role Name"
                id="locationName"
              ></Textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
            <label htmlFor="description">Description</label>
          <Textarea
            className="form-control mt-2 mb-4 textnormal"
            id="description"
            rows="4"
            placeholder="Enter Role Description"
          ></Textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
            
            </div>

          </div>
        
        </div>
        <div className="row mt-2">
          <div className="col-md-2 ">
            <Button
              text="Cancel"
              className="btn btn-bordered btn-outline-dark  form-control mb-2 btn-sizing textbold"
              onClick={() => navigate("/roles")}
            />
          </div>
          <div className="col-md-2 ">
            <Button
              text="Create Role"
              className="btn btn-primary form-control btn-sizing textboldbtn "
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addrole;
