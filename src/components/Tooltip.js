import React, { useState } from "react";
import ReactDOM from "react-dom";
import useHover from "../hooks/useHover";
const Tooltip = ({ children, text }) => {
    const { hovered, nodeRef } = useHover();
    const [coordinate, setCoordinate] = useState({});
    const handleMouseOver = () => {
        setCoordinate(nodeRef.current.getBoundingClientRect());
    };
    return (
        <>
            <div className="relative inline-block p-16">
                <span
                    className="font-semibold text-black cursor-pointer"
                    ref={nodeRef}
                    onMouseOver={handleMouseOver}
                >
                    {text}
                </span>
                {hovered && (
                    <TooltipContent
                        children={children}
                        coordinate={coordinate}
                    ></TooltipContent>
                )}
            </div>
        </>
    );
};

const TooltipContent = ({ children, coordinate }) => {
    if (typeof document === "undefined") return;
    return ReactDOM.createPortal(
        <p
            className={`absolute z-10 p-2 text-center text-white bg-black -translate-y-full max-w-[200px] -translate-x-2/4`}
            style={{
                top: coordinate.top - coordinate.height / 2 + window.scrollY,
                left: coordinate.left + coordinate.width / 2,
            }}
        >
            {children}
        </p>,
        document.querySelector("body")
    );
};

export default Tooltip;
