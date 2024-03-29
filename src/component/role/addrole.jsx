import React from "react";
import Textarea from "../common/textbox";
import Button from "../common/button";
import "./addrole.css";
import { useNavigate } from "react-router";
import Breadcrumbs from "../common/breadcrumb";
import constants from "../../utils/constants.json";
import { useDispatch } from "react-redux";
import { newMessage, increaseNotificationCounter } from "../../utils/reducer/notificationreducer";

const Addrole = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const message = 'Role created Succesfully  '
  const handleNotification =()=>{
    dispatch(newMessage(message));
    dispatch(increaseNotificationCounter());
  }
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <Breadcrumbs
            title="Role"
            subtitle="AddRole"
            onClick={() => navigate(constants.roles)}
          />
        </div>
        <div className="col-md-1"></div>
      </div>

      <form onSubmit={(e)=> e.preventDefault()}>
        <div>
          <div className="row mt-4">
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <label htmlFor="locationID">Role Id</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4 textnormal"
                placeholder="101"
                id="locationID"
              ></Textarea>
            </div>
            <div className="col-md-5">
              <label htmlFor="locationName">Role Name</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4 textnormal"
                placeholder="Enter Role Name"
                id="locationName"
              ></Textarea>
            </div>
            <div className="col-md-1"></div>
          </div>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control mt-2 mb-4 textnormal"
                id="description"
                rows="4"
                placeholder="Enter Role Description"
              ></textarea>
            </div>
            <div className="col-md-1"></div>
          </div>

          <div className="mt-3 row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <label htmlFor="accesstable">
                Access
              </label>
              <div className="table-responsive">
                <table
                  className="table table-bordered rounded-4 mt-2 mb-4  "
                  id="accesstable"
                >
                  <thead className="table-header">
                    <tr>
                      <th scope="col th-t">Content</th>
                      <th scope="col">Add</th>
                      <th scope="col">Modify</th>
                      <th scope="col">Delete</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">User</th>
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
            <div className="col-md-1"></div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-1"></div>
          <div className="col-md-2 ">
            <Button
              text="Cancel"
              className="btn secondary-btn form-control mb-2 btn-sizing textSecondryBtn btn-addrole-cancel-tablet-view"
              onClick={() => navigate("/roles")}
            />
          </div>
          <div className="col-md-2">
            <Button
              text="Create Role"
              className="btn primary-btn form-control mb-2 btn-sizing textboldbtn btn-addrole-createrole-tablet-view"
              onClick={handleNotification}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addrole;
