import React, { useEffect, useState } from "react";
import Table from "../common/table";
import "./users.css";
import { useNavigate } from "react-router";
import Button from "../common/button";
import constants from "../../utils/constants.json";
import GetData from "../../utils/apicalls/get";


const Index=()=>{
  const navigate=useNavigate();

  const [data,setData]=useState([]);

  const[searchQuery,setSearchQuery]=("");
  
  const [isdata,setisData]=useState(false);

  useEffect(()=>{
      getData();

  },[])

  // api function
  const getData=()=>{

    //calling common  GetData Function and passing url suffix as a parameter
    GetData("users")
    .then((res)=>{
      setData(res.data.Tabledata);
      
      console.log(res.data.Tabledata)
      if(data.length===0){
        setisData(true);
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  const filteredData =data.filter((d) =>      
  Object.values(d)
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  ); 
  // Table headers
    const columns = [
        {
          name: "User ID",
          selector: row => row.UserID,
          sortable: true,
          style: {
            width: "90px",
          },
        },
        {
          name: "User Name",
          selector: row => row.UserName,
          sortable: true,
          style: {
            width: "90px",
          },
        },
        {
          name: "Added On",
          selector: row => row.AddedOn,
          sortable: true,
          style: {
            width: "90px",
          },
        },
        {
          name: "User Role",
          selector: row => row.UserRole,
          sortable: true,
          style: {
            width: "120px",
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
    return(
      <div className="container rounded-3 mt-3">
      <div className="row ms-2 me-2 ">
        
        <div className="col-md-10  ps-3">
          <h5 className="textbold">User</h5>
        </div>
        {/* <div className="col-md-4 "></div> */}
        <div className="col-md-2 d-flex justify-content-end pe-4">
        <Button text="Add User"className="form-control btn primary-btn textboldbtn btn-tablet-index-user-btn-view" onClick={() => navigate(constants.adduser)}></Button>
     
          
        </div>
      </div>
    
      <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-3 mt-2"></div>
          <div className="col-md-3 pe-4 mt-2">
            {/* loading input based on table data */}
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
   
      <Table columns={columns} filteredData={data}/>
    </div>
    )
}
export default Index;