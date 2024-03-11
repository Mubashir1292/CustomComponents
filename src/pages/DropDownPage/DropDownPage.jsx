import React from "react";
import DropDown from "../../components/dropDown/DropDown";

function DropDownPage() {
  const options = [
    {
      label: "AI",
      value: "Artificial Intelligence",
    },
    {
      label: "SE",
      value: "Software Engineering",
    },
    {
      label: "DB",
      value: "Database Administration",
    },
    {
      label: "GE",
      value: "Generic Projects",
    },
  ];
  return (
    <div>
      <DropDown options={options}></DropDown>
    </div>
  );
}

export default DropDownPage;
