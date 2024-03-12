import React, { useState } from "react";

function DropDown({ options, selection, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (option) => {
    setIsOpen(!isOpen);
  };
  const renderedOptions = options.map((item, index) => (
    <div key={item.label}>
      <div
        onClick={() => {
          handleClick(item);
          onSelect(item);
        }}
        className="cursor-pointer"
      >
        {item.value}
      </div>
    </div>
  ));
  let content = "Choose Domain...";
  if (selection) {
    content = selection.value;
  }
  return (
    <div className="flex flex-col">
      <div onClick={handleClick}>{content}</div>
      {isOpen && <div> {renderedOptions}</div>}
    </div>
  );
}
export default DropDown;
