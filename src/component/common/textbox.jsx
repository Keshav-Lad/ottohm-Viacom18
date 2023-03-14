import React from "react";

const Textbox = (props) => {
  return (
    <div>
      <input
        className={props.className}
        type={props.type}
        onChange={props.onChange}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        style={props.style}
      />
    </div>
  );
};

export default Textbox;
