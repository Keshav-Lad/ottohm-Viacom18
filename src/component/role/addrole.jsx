import React from "react";
import Textarea from "../common/textbox";
import Button from "../common/button";
import "./addrole.css";
import { useNavigate } from "react-router";
import Breadcrumbs from "../common/breadcrumb";
import constants from "../../utils/constants.json";

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
          <textarea
            className="form-control mt-2 mb-4 textnormal"
            id="description"
            rows="4"
            placeholder="Enter Role Description"
          ></textarea>
            </div>
          </div>

          <div className="mt-5 row">
            <div className="col-md-8 ">
            <label htmlFor="accesstable">Access</label>
            <table className="table table-bordered rounded-4 mt-2 mb-4  " id="accesstable">
              <thead className="table-primary">
                <tr>
                  <th scope="col">Content</th>
                  <th scope="col">Add</th>
                  <th scope="col">Modify</th>
                  <th scope="col">Delete</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row ">User</th>
                  <td className="col-sm-2">
                    <input type="checkbox" className="checkbox-input" />
                  </td>
                  <td className="col-sm-2">
                    <input type="checkbox" className="checkbox-input" />
                  </td>
                  <td className="col-sm-2">
                    <input type="checkbox" className="checkbox-input" />
                  </td>
                  <td className="col-sm-2">
                    <input type="checkbox" className="checkbox-input" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">Admin</th>
                  <td className="col-sm-2">
                    <input type="checkbox" className="checkbox-input" />
                  </td>
                  <td className="col-sm-2">
                    <input type="checkbox" className="checkbox-input" />
                  </td>
                  <td className="col-sm-2">
                    <input type="checkbox" className="checkbox-input" />
                  </td>
                  <td className="col-sm-2">
                    <input type="checkbox" className="checkbox-input" />
                  </td>
                </tr>
              </tbody>
            </table>
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
