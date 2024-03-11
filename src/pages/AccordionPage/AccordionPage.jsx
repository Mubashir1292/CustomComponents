import React from "react";
import Accordion from "../../components/Accordion/Accordion";

function AccordionPage() {
  const items = [
    {
      Id: 1,
      taskTitle: "ERD Checking",
      content: {
        id: "2020-Arid-3675",
        name: "Mubashir Liaqat",
        taskId: 1,
        Marks: 9,
      },
    },
    {
      Id: 2,
      taskTitle: "ERD Checking",
      content: {
        id: "2020-Arid-4224",
        name: "Touseef Sajjad",
        taskId: 1,
        Marks: 9,
      },
    },
  ];
  return (
    <div>
      <Accordion items={items}></Accordion>
    </div>
  );
}

export default AccordionPage;
