import React, { useState } from "react";
import DropDown from "../../components/dropDown/DropDown";
function DropDownPage() {
  const [selection, setSelection] = useState(null);
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
  const handleSelection = (option) => {
    setSelection(option);
  };
  return (
    <div>
      <DropDown
        options={options}
        value={selection}
        onChange={handleSelection}
      ></DropDown>
    </div>
  );
}

export default DropDownPage;
