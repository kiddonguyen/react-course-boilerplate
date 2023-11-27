import { createContext, useContext } from "react";

const CountContext = createContext(undefined);
function CountProvider({ value, ...props }) {
    return (
        <CountContext.Provider {...props} value={value}></CountContext.Provider>
    );
}
function useCount() {
    const context = useContext(CountContext);
    if (typeof context === "undefined")
        throw new Error("useCount must be used within a CountProvider");
    return context;
}
export { CountProvider, useCount };
