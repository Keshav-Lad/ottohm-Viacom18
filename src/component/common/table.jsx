
import DataTable,{defaultThemes} from "react-data-table-component";
import { FormCheck } from "react-bootstrap";
import "./Css/table.css";

import  '../../utils/fonts/GothamBold.ttf';
import  '../../utils/fonts/GothamBook.ttf';


const DashBoardTable = (props) => {

    const customStyles = {
      table: {
        fontFamily:'GothamBold',
      },
      headRow: {
        style: {
          backgroundColor: "#2e3192",
          color: "#FFFFFF",
          borderTopStyle: "solid",
          borderTopWidth: "1px",
          borderTopColor: defaultThemes.default.divider.default,
          font: 'GothamBold'
        },
      },
      headCells: {
        style: {
          "&:not(:last-of-type)": {
            borderRightStyle: "solid",
            borderRightWidth: "1px",
            borderRightColor: defaultThemes.default.divider.default,
            font: "GothamBold",
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