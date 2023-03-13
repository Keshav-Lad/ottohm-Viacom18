import React from "react";
import Textarea from "../../common/textbox";
import Button from "../../common/button";
import { ArrowLeft } from 'react-bootstrap-icons';
import "./addrole.css";
const Addrole = () => {
  return (
    <div className="container">
      <div className="breadcrumb">
        <span className="breadcrumb-item"><ArrowLeft size={30}/></span>
        <span className="breadcrumb-item">Back</span>
      </div>
      <form>
        <div>
          <div className="row mt-4">
            <div className="col-md-6">
              <label htmlFor="locationID">Role Id</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4"
                placeholder="101"
                id="locationID"
              ></Textarea>
            </div>
            <div className="col-md-6">
              <label htmlFor="locationName">Role Name</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4"
                placeholder="Enter Role Name"
                id="locationName"
              ></Textarea>
            </div>
          </div>
          <label for="description">Description</label>
          <textarea
            className="form-control mt-2 mb-4"
            id="description"
            rows="4"
            placeholder="Enter Role Description"
          ></textarea>
          <div className="mt-5">
            <label htmlFor="accesstable">Access</label>
            <table className="table table-bordered mt-2 mb-4" id="accesstable">
              <thead className="table-dark">
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
        <div className="row">
          <div className="col-md-2">
            <Button
              text="Cancel"
              className="btn btn-bordered btn-outline-dark mt-5 button-add-location"
            />
          </div>
          <div className="col-md-2">
            <Button
              text="Create Role"
              className="btn btn-primary mt-5 button-add-location"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addrole;
