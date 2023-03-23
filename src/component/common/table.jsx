
import DataTable,{defaultThemes} from "react-data-table-component";
import { FormCheck } from "react-bootstrap";
import "./Css/table.css";

import GothamBold from  '../../utils/fonts/GothamBold.ttf';
import  '../../utils/fonts/GothamBook.ttf';


const DashBoardTable = (props) => {

    const customStyles = {
      table: {
        font: GothamBold,
      },
      headRow: {
        style: {
          backgroundColor: "#333333",
          color: "#FFFFFF",
          borderTopStyle: "solid",
          borderTopWidth: "1px",
          borderTopColor: defaultThemes.default.divider.default,
          font:"13px GothamMedium"
        },
      },
      headCells: {
        style: {
          "&:not(:last-of-type)": {
            borderRightStyle: "solid",
            borderRightWidth: "1px",
            borderRightColor: defaultThemes.default.divider.default,
            font:"13px GothamMedium"
            
          },
        },
      },
      cells: {
        style: {
          "&:not(:last-of-type)": {
            borderRightStyle: "solid",
            borderRightWidth: "1px",
            borderRightColor: defaultThemes.default.divider.default,
            font:"12px GothamBook",
            color:"#333333"
            
          },
        },
      },
    };
  
    const conditionalRowStyles = [
      {
        when: (row) => row.id % 2 !== 0,
        style: {
          backgroundColor: "#ffffff",
        },
      },
    ];
  return (
       
<div className="container table-responsive rounded-top mt-2">
          <DataTable
            columns={props.columns}
            data={props.filteredData}
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
        
  );
};

export default DashBoardTable;