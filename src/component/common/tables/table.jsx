import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable,{defaultThemes} from "react-data-table-component";

import { FormCheck } from "react-bootstrap";


const DashBoardTable = () => {
  const [data, setData] = useState([]);
 
 

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("https://60f505a8-495f-478a-b065-99e0d4968ede.mock.pstmn.io/table").then((res) => {
      setData(res.data.Tabledata);
      console.log(res.data.Tabledata);
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
  
  const customStyles = {
    table: {
      fontFamily: "Montserrat, sans-serif",
  },
      headRow: {
      style: {
        backgroundColor:'hsl(0deg 1% 26%)',
        color: "#FFFFFF",
        opacity: 1,
        borderTopStyle: 'solid',
        borderTopWidth: '1px',
        borderTopColor: defaultThemes.default.divider.default,
      },
    },
    headCells: {
      style: {
        '&:not(:last-of-type)': {
          borderRightStyle: 'solid',
          borderRightWidth: '1px',
          borderRightColor: defaultThemes.default.divider.default,
        },
      },
    },
    cells: {
      style: {
        '&:not(:last-of-type)': {
          borderRightStyle: 'solid',
          color: "#193256",
          opacity: 1,
          borderRightWidth: '1px',
          borderRightColor: defaultThemes.default.divider.default,
        },
      },
    },
  };

  const conditionalRowStyles = [
    {
      when: row => row.id % 2 !==0,
        style: {
        backgroundColor: '#F8FEFF',
         
         },
    },
    ];


  const handleRowClicked = (row, e) => {
    console.log("Clicked row:", row);
    console.log("Click event:", e);
    
  };

  // const handleRowSelected = (row, e) => {
  //   console.log("Selected row:", row);
  //   console.log("Selected event:", e);
  //   };
  
 

   // show loader when table is empty
  //  if (data.length === 0) {
  //   return (
  //     <div className="d-flex justify-content-center">
  //       <div className="spinner-border" role="status">
  //         <span className="visually-hidden">Loading...</span>
  //       </div>
  //     </div>
  //   );
  // }

  return (
   
        <DataTable
          columns={columns}
          data={data}
          pagination          
          paginationPerPage={10}
          paginationRowsPerPageOptions={[10, 20, 30]}
          noHeader
          highlightOnHover
          pointerOnHover
          noDataComponent="Table is Empty"
          customStyles={customStyles}
          onRowClicked={handleRowClicked}
          // selectableRows
          // selectableRowsVisibleOnly
          // selectableRowsHighlight
          // conditionalRowStyles={conditionalRowStyles}
          
        />
  );
};

export default DashBoardTable;