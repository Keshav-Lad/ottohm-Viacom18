import React, { useState, useEffect } from "react";
import DataTable,{defaultThemes} from "react-data-table-component";
import { FormCheck } from "react-bootstrap";
import "./Css/table.css";
import GetData from "../../utils/apicalls/get";


const DashBoardTable = (props) => {

  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");


  useEffect(() => {
    getData();
    // putData();
    // postData();
    // patchData();
    // deleteData();
    },[]);

    const getData=()=>{
        console.log("In Table Componenet")
        GetData()
        .then((res) => {
          console.log(res.data.Tabledata);
          setData(res.data.Tabledata)
        })
        .catch((error) => {
          console.error(error);
        });
        };
    

     
  


    const customStyles = {
      table: {
        fontFamily: "Gotham",
      },
      headRow: {
        style: {
          backgroundColor: "#2e3192",
          color: "#FFFFFF",
          borderTopStyle: "solid",
          borderTopWidth: "1px",
          borderTopColor: defaultThemes.default.divider.default,
          font: "normal normal bold 14px Gotham",
        },
      },
      headCells: {
        style: {
          "&:not(:last-of-type)": {
            borderRightStyle: "solid",
            borderRightWidth: "1px",
            borderRightColor: defaultThemes.default.divider.default,
            font: "normal normal bold 14px Gotham",
          },
        },
      },
      cells: {
        style: {
          "&:not(:last-of-type)": {
            borderRightStyle: "solid",
            borderRightWidth: "1px",
            borderRightColor: defaultThemes.default.divider.default,
            font: "normal normal normal 14px Gotham",
          },
        },
      },
    };
  
    const conditionalRowStyles = [
      {
        when: (row) => row.id % 2 !== 0,
        style: {
          backgroundColor: "#F8FEFF",
          font: "normal normal normal 12px Gotham",
        },
      },
    ];
    const filteredData =data.filter((d) =>
      Object.values(d)
        .join(" ")
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
 
  return (
       
    <div className="container">
    <div className="row">
        <div className="col-md-8"></div>
        <div className="col-md-4 mt-2">
          <div className="mb-3 pe-3">
              
              <input
                  type="text"
                  className="form-control textnormal rounded-5"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
              />
              </div>
        </div>
    </div>
<div className="container table-responsive rounded-top">
          <DataTable
            columns={props.columns}
            data={filteredData}
            pagination
            paginationPerPage={10}
            paginationRowsPerPageOptions={[10, 20, 30]}
            noHeader
            highlightOnHover
            pointerOnHover
            noDataComponent="Table is Empty"
            customStyles={customStyles}
            onRowClicked={props.componentCall}
            selectableRowsVisibleOnly
            selectableRowsHighlight
            conditionalRowStyles={conditionalRowStyles}
            selectableRowsComponent={FormCheck}
            />
          </div>
          </div>
  );
};

export default DashBoardTable;