import React from "react";
import Textarea from "../../common/textbox";
import Button from "../../common/button";
import { ArrowLeft } from 'react-bootstrap-icons';
import "./addrole.css";
import { useNavigate } from "react-router";
const Addrole = () => {
  const navigate=useNavigate();
  return (
    <div className="container mt-3">
      <div className="breadcrumb">
        <button className=" btn btn-style fs-6 fw-bold" onClick={() => navigate("/roles")}>
          <ArrowLeft size={25}  width={20} /><span className="mt-5 ms-2">Back</span>
          </button>
    
        {/* <span className="breadcrumb-item"><ArrowLeft size={30}/></span>
        <span className="breadcrumb-item">Back</span> */}
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
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control mt-2 mb-4"
            id="description"
            rows="4"
            placeholder="Enter Role Description"
          ></textarea>
          {/* <div className="mt-5">
            <label htmlFor="accesstable">Access</label>
            <table className="table table-bordered  mt-2 mb-4  " id="accesstable">
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
          </div> */}
        </div>
        <div className="row mt-5">
          <div className="col-md-2 ">
            <Button
              text="Cancel"
              className="btn btn-bordered btn-outline-dark  form-control mb-2 btn-sizing"
              onClick={() => navigate("/roles")}
            />
          </div>
          <div className="col-md-2 ">
            <Button
              text="Create Role"
              className="btn btn-primary form-control btn-sizing "
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addrole;
