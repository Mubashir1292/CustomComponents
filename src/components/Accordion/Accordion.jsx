import React, { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const handleClickTogglingAccordion = (nextIndex) => {
    if (nextIndex === expandedIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(nextIndex);
    }
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span className="text-3xl">
        {isExpanded ? <GoChevronUp /> : <GoChevronDown />}
      </span>
    );

    return (
      <div key={item.Id}>
        <div
          className="flex justify-between p-3 bg-gray-100 border-b items-center cursor-pointer text-xl"
          onClick={() => handleClickTogglingAccordion(index)}
        >
          {item.taskTitle} {icon}
        </div>
        {isExpanded && (
          <div className="border-b p-5 space-x-3">
            <span>{item.taskTitle}</span>
            <span>{item.content.name}</span>
            <span>{item.content.Marks}</span>
          </div>
        )}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
