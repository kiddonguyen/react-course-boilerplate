import React from "react";
import { useCount } from "./count-context";

const Decrement = () => {
    const { handleDecrement } = useCount();
    return (
        <button
            className="decrement p-5 flex items-center justify-center bg-slay-200 text-lg cursor-pointer"
            onClick={handleDecrement}
        >
            -
        </button>
    );
};

export default Decrement;
