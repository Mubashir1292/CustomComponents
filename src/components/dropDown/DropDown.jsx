import React, { useState } from "react";

function DropDown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (option) => {
    setIsOpen(!isOpen);
  };
  const renderedOptions = options.map((item, index) => (
    <div key={item.label}>
      <div
        onClick={() => {
          handleClick(item);
          onChange(item);
        }}
        className="cursor-pointer"
      >
        {item.value}
      </div>
    </div>
  ));
  return (
    <div className="flex flex-col">
      <div onClick={handleClick}>{value?.value || "Select Domain.."}</div>
      {isOpen && <div> {renderedOptions}</div>}
    </div>
  );
}
export default DropDown;
