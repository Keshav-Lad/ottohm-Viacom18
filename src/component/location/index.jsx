import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Button from "../common/button";
import Table from "../common/table";
import "./location.css";
import constants from "../../utils/constants.json";
import GetData from "../../utils/apicalls/get";

const Index = () => {


  const navigate=useNavigate();
  const [data,setData]=useState([]);
  const [searchQuery,setSearchQuery]=useState("");
  const [isdata,setisData]=useState(false);

  useEffect(()=>{
    getData();

  },[])
  const getData=()=>{
    GetData("locations")
    .then((res)=>{
      setData(res.data.Tabledata)
      if(data.length===0){
        setisData(true);
      }
    }).catch((err)=>{
      console.log(err);
    })
  }

  const filteredData =data.filter((d) =>      
  Object.values(d)
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  ); 
  const columns = [
    {
      name: "Location ID",
      selector: row => row.LocationID,
      sortable: true,
      style: {
        width: "90px",
      },
    },
    {
      name: "Location Name",
      selector: row => row.LocationName,
      sortable: true,
      style: {
        width: "90px",
      },
    },
    {
      name: "Location City",
      selector: row => row.LocationCity,
      sortable: true,
      style: {
        width: "90px",
      },
    },
    {
      name: "Stadium Name",
      selector: row => row.StadiumName,
      sortable: true,
      style: {
        width: "90px",
      },
    },
    {
      name: "Contact Person",
      selector: row => row.ContactPerson,
      sortable: true,
      style: {
        width: "90px",
      },
    },
    {
      name: "Contact No",
      selector: row => row.ContactNo,
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
  return (
    <div className="container rounded-3 mt-3">
    <div className="row ms-2 me-2 ">
      
      <div className="col-md-10  ps-3">
        <h5 className="textbold">Location</h5>
      </div>
      {/* <div className="col-md-4 "></div> */}
      <div className="col-md-2 d-flex justify-content-end pe-4">
      <Button text="Add Location"className="form-control btn primary-btn textboldbtn btn-tablet-index-location-btn-view" onClick={() => navigate(constants.addlocation)}/>
        
      </div>
    </div>
    <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-3 mt-2"></div>
          <div className="col-md-3 pe-4 mt-2">
              
          {isdata?(
                 <input
                 type="text"
                 className="form-control textnormal rounded-5"
                 placeholder="Search"
                 
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
             />
              ):""}
              </div>
        
    </div>
    <Table columns={columns} filteredData={filteredData}/>
  </div>
  );
};

export default Index;
