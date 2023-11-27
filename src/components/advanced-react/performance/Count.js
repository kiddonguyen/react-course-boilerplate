import React, { useRef, useState, useEffect } from "react";

const Count = React.memo(({ calculate }) => {
    const [count, setCount] = useState(0);
    const renderCount = useRef(0);

    useEffect(() => {
        renderCount.current++;
    });

    return (
        <div>
            <div>Count: {count}</div>
            <div>Renders: {renderCount.current}</div>
            <button
                className="p-3 rounded bg-blue-400 text-white"
                onClick={() => setCount((c) => c + 1)}
            >
                Increment
            </button>
        </div>
    );
});

export default Count;
