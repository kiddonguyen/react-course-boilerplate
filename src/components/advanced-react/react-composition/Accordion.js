import AccordionContent from "./AccordionContent";
import AccordionHeader from "./AccordionHeader";
import { AccordionProvider } from "./accordion-content";
// Container component
const Accordion = ({ header, children }) => {
    return (
        <AccordionProvider>
            <div className="mb-5">
                <AccordionHeader>{header}</AccordionHeader>
                <AccordionContent>{children}</AccordionContent>
            </div>
        </AccordionProvider>
    );
};

export default Accordion;
