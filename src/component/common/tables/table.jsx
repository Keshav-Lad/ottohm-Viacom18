import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable,{defaultThemes} from "react-data-table-component";

import { FormCheck } from "react-bootstrap";


const DashBoardTable = (props) => {

  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
      getData();
    }, []);

  const getData = () => {
      axios.get("https://60f505a8-495f-478a-b065-99e0d4968ede.mock.pstmn.io/table").then((res) => {
        setData(res.data.Tabledata);
        console.log(res.data.Tabledata);
      });
    };

  
    const customStyles = {
      table: {
        fontFamily: "Montserrat, sans-serif",
      },
      headRow: {
        style: {
          backgroundColor: "hsl(0deg 1% 26%)",
          color: "#FFFFFF",
          borderTopStyle: "solid",
          borderTopWidth: "1px",
          borderTopColor: defaultThemes.default.divider.default,
        },
      },
      headCells: {
        style: {
          "&:not(:last-of-type)": {
            borderRightStyle: "solid",
            borderRightWidth: "1px",
            borderRightColor: defaultThemes.default.divider.default,
          },
        },
      },
      cells: {
        style: {
          "&:not(:last-of-type)": {
            borderRightStyle: "solid",
            borderRightWidth: "1px",
            borderRightColor: defaultThemes.default.divider.default,
          },
        },
      },
    };
  
    const conditionalRowStyles = [
      {
        when: (row) => row.id % 2 !== 0,
        style: {
          backgroundColor: "#F8FEFF",
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
                  className="form-control"
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