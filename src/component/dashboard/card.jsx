import React from "react";
import "./card.css"
const Card = (props) => {
  return (
    <div className="card rounded-0 w-100 h-100 card-style " >
      <div className="card-body text-center">
        <h5 className="card-title textbold">{props.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted text-nowrap textnormal">{props.subtitle}</h6>
      </div>
    </div>
  );
};
export default Card;
