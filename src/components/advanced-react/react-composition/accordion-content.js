// import { createContext, useContext } from "react";
// import useToggle from "./useToggle";

// const AccordionContext = createContext();
// const AccordionProvider = (props) => {
//     const { value: show, handleToggleValue: handleToggleShow } = useToggle();
//     const values = { show, handleToggleShow };
//     return (
//         <AccordionContext.Provider
//             {...props}
//             value={values}
//         ></AccordionContext.Provider>
//     );
// };
// const useAccordion = () => {
//     const context = useContext(AuthContext);
//     if (typeof context === "undefined") {
//         throw new Error(
//             "useAccordion must be used within of AccordionProvider"
//         );
//     }
// };

// export { useAccordion, AccordionProvider };
