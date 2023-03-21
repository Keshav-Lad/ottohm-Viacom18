import React, { useState } from 'react';
import { useEffect } from 'react';
import GetData from "../../utils/apicalls/get";
import Card from './card';
import Table from '../common/table';
import "./dashboard.css";

const Index =() => {
  
  const [data,setData]=useState([])
 
  useEffect(() => {
    console.log("hello from use")
    getData();
   
    },[]);

    
  const getData=()=>{
   
    GetData("dashboard")
    .then((res) => {
     
      setData(res.data.Tabledata)
    })
    .catch((error) => {
      console.error(error);
    });
    };
  const columns = [
    {
      name: "Sr.No",
      selector: row => row.TournamentID,
      sortable: true,
      style: {
        width: "90px",
      },
    },
    {
      name: "Tournament ID",
      selector: row => row.TournamentID,
      sortable: true,
      style: {
        width: "90px",
      },
    },
    {
      name: "Tournament Date",
      selector: row => row.TournamentDate,
      sortable: true,
      style: {
        width: "90px",
      },
    },
    {
      name: "Tournament Name",
      selector: row => row.TournamentName,
      sortable: true,
      style: {
        width: "90px",
      },
    },
    {
      name: "Created By",
      selector: row => row.CreatedBy,
      sortable: true,
      style: {
        width: "90px",
      },
    },
    {
      name: "Created On",
      selector: row => row.CreatedOn,
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
    
    <div className='container mt-3' >

      <p className='fs-6 textbold'>DashBoard</p>
      <div className='row'>
        <div className="col-md-3 mb-2 ">
          <Card title="Total Tournament" subtitle="80,000"/>
        </div>
        <div className="col-md-3 mb-2 ">
        <Card title="Total No of Teams" subtitle="80,000"/>
        </div>
        <div className="col-md-3 mb-2 ">
        <Card title="Ongoing Tournament" subtitle="80,000"/>
        </div>
        <div className="col-md-3 mb-2 ">
        <Card title="Tournament Relocated" subtitle="80,000"/>
        </div>
      </div>
      <div className='container border border-dark border-1 rounded-3 text-center mt-4'>
        <h1 className='mt-5 mb-5 pt-5 pb-5 textnormal'>Analytics</h1>
      </div>
      
      <div className="mt-4 rounded-top ">
        <h5 className='pb-3 ms-4 textbold'>Ongoing Tournament</h5>
        <div className="container">    
        <Table columns={columns} filteredData={data}/>
      </div>
    </div>
    </div>
  )
}
export default Index;