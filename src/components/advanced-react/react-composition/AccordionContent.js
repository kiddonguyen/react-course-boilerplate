import React from "react";
// Specialized Component
const AccordionContent = ({ children }) => {
    const { show } = useAccordion();
    return (
        <>
            {show && (
                <div className="content p-4 border border-gray-200 rounded-lg mt-2">
                    {children}
                </div>
            )}
        </>
    );
};

export default AccordionContent;
