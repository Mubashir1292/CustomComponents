import React, { useState } from "react";

function DropDown({ options }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (option) => {
    setIsOpen(!isOpen);
    console.log(option);
  };

  const renderedOptions = options.map((item, index) => (
    <div key={item.label}>
      <div onClick={() => handleClick(item)} className="cursor-pointer">
        {item.value}
      </div>
    </div>
  ));
  return (
    <div className="flex flex-col">
      <div onClick={handleClick}>Select...</div>
      {isOpen && <div> {renderedOptions}</div>}
    </div>
  );
}

export default DropDown;
