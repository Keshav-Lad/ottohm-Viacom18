import React from "react";
import Fullcalander from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./calander.css";
const Calander = () => {
  const headerToolbarOptions = {
    left: "prev",
    center: "title",
    right: "next",
  };
  // const CustomDayCell = ({ date }) => {
  //   return (
  //     <div
  //       style={{
  //         height: "80px",
  //         width: "80px",
  //         backgroundColor: "#f9f9f9",
  //         border: "1px solid black",
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",

  //       }}
  //     >
  //       {date.getDate()}
  //     </div>
  //   );
  // };
  return (
    <Fullcalander
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      height={window.innerHeight - 80}
      headerToolbar={headerToolbarOptions}
      headerToolbarClassNames="my-header-toolbar"
      events={[
        { title: "event 1", date: "2023-03-12" },
        { title: "event 2", date: "2023-03-12" },
        { title: "event 3", date: "2023-03-22" },
      ]}
      editable={true}
      selectable={true}
    />
  );
};

export default Calander;
