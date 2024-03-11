import React from "react";

function DropDown({ options }) {
  const renderedOptions = options.map((item, index) => (
    <div key={index}>
      <div>{item.value}</div>
    </div>
  ));
  return <div>{renderedOptions}</div>;
}

export default DropDown;
