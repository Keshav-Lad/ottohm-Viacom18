import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Table from "../common/table";
import "./tournament.css";
import Button from "../common/button";
import constants from "../../utils/constants.json";
import GetData from "../../utils/apicalls/get";

const Index=()=>{
  
  const navigate=useNavigate();
  const [data,setData]=useState([]);
  const [searchQuery,setSearchQuery]=useState("");
  const [isdata,setisData]=useState(false);

  useEffect(()=>{
    getData();
  },[])

  const getData=()=>{
   
    GetData("tournament")
    .then((res) => {
     
      setData(res.data.Tabledata)
      if(data.length===0){
        setisData(true);
      }
    })
    .catch((error) => {
      console.error(error);
    });
    };

    const filteredData =data.filter((d) =>      
    Object.values(d)
        .join(" ")
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    ); 

  
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
          name: "Tournament Name",
          selector: row => row.TournamentDate,
          sortable: true,
          style: {
            width: "90px",
          },
        },
        {
          name: "Created By",
          selector: row => row.TournamentName,
          sortable: true,
          style: {
            width: "90px",
          },
        },
        {
          name: "Created on",
          selector: row => row.CreatedBy,
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

      const TournamentComponentLoad=()=>{
        navigate(constants.tournamentname)
      }
    return(
      <div className="container rounded-3 mt-3">
      <div className="row ms-2 me-2 ">
        
        <div className="col-md-10  ps-3">
          <h5 className="textbold" >Tournaments</h5>
        </div>
        {/* <div className="col-md-2"></div> */}
        <div className="col-md-2 d-flex justify-content-end btn-handle">
        <Button text="Create Tournament"className="form-control btn primary-btn textboldbtn btn-tablet-index-tournaments-btn-view" onClick={() => navigate(constants.addtournament)}></Button>
          
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
      <Table columns={columns} componentCall={TournamentComponentLoad} filteredData={filteredData}/>
    </div>
    );

}
export default Index;