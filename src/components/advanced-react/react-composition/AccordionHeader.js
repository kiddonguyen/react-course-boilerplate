import React from "react";
import { useAccordion } from "./accordion-content";
// Specialized Component
const AccordionHeader = ({ children }) => {
    const { show, handleToggleShow } = useAccordion(); 
    return (
        <div
            className="header cursor-pointer p-4 border border-gray-300 rounded-lg flex align-center"
            onClick={handleToggleShow}
        >
            <span>{children}</span>
            {show ? <span>-</span> : <span>+</span>}
        </div>
    );
};

export default AccordionHeader;
