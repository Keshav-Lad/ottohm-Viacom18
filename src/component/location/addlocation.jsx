import React from "react";
import Button from "../common/button";
import Dropdown from "../common/dropdown";
import Textarea from "../common/textbox";
import "./addlocation.css";
import Breadcrumbs from "../common/breadcrumb";
import { useNavigate } from "react-router-dom";
import constants from "../../utils/constants.json";
import { useState, useEffect,useMemo} from "react";


const Addlocation = () => {
  const navigate=useNavigate();

  //location Id dropdown Data
  const[locationData,setLocationData] = useState([]);
  console.log(locationData);
  const locationDropdownData = useMemo(() => ["101",'102','103','104','105'], []) //axios data fetched logic here

  //stadium Data
  const[stadiumData, setStadiumData]=useState([])
  const stadiumDropdownData =useMemo(() => ['mumbai','pune','gujrat','nashik'], [])
  
  useEffect(()=>{
    setLocationData(locationDropdownData)
    setStadiumData(stadiumDropdownData)
  },[stadiumDropdownData,locationDropdownData])

  return (
    <div className="container mt-4 ps-3">
      <Breadcrumbs title="Location" subtitle="AddLocation" onClick={() => navigate(constants.location)}/>
      <form>
        <div>
          <div className="row mt-4">
            <div className="col-md-4">
              <label htmlFor="locationID">Location Id</label>
              <Dropdown
                className="form-control form-select mt-2 mb-4 textnormal"
                id="locationID"
                options={locationData}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="locationName">Location Name</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4 textnormal"
                id="locationName"
              ></Textarea>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-4">
              <label htmlFor="locationName">City</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4 textnormal"
                id="locationName"
              ></Textarea>
            </div>
            <div className="col-md-4">
              <label htmlFor="locationName">Stadium</label>
              <Dropdown
                className="form-control form-select mt-2 mb-4 textnormal"
                id="locationName"
                options={stadiumData}
              />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-4">
              <label htmlFor="locationName">Contact Person</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4 textnormal"
                id="locationName"
              ></Textarea>
            </div>
            <div className="col-md-4">
              <label htmlFor="locationName">Contact Number</label>
              <Textarea
                text="text"
                className="form-control mt-2 mb-4 textnormal"
                id="locationName"
              ></Textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
            <Button
              text="Add Location"
              className="btn secondary-btn mt-3 form-control textboldbtn"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
export default Addlocation;
