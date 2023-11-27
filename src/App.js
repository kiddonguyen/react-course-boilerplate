import React from "react";
import Accordion from "./components/advanced-react/react-composition/accordion-zustand/Accordion";
function App() {
  return (
    <>
      <h1>Your App</h1>
      <Accordion header="Section 1">
        <p>Content for Section 1</p>
      </Accordion>
      <Accordion header="Section 2">
        <p>Content for Section 2</p>
      </Accordion>
    </>
  );
}
export default App;
