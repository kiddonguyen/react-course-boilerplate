import React from "react";
import AccordionContent from "./AccordionContent";
import AccordionHeader from "./AccordionHeader";
import { useAccordion } from "./accordion-store";

const Accordion = ({ header, children }) => {
  const { show, toggleShow } = useAccordion();

  return (
    <div className="mb-5">
      <AccordionHeader show={show} onToggle={toggleShow}>
        {header}
      </AccordionHeader>
      {show && <AccordionContent>{children}</AccordionContent>}
    </div>
  );
};

export default Accordion;
