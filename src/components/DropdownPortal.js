import React, { useState } from "react";
import useClickOutSide from "../hooks/useClickOutside";
import ReactDOM from "react-dom";
const DropdownPortal = () => {
    const { show, setShow, nodeRef } = useClickOutSide();
    const [coordinate, setCoordinate] = useState({});
    const handleClick = (event) => {
        // console.log(nodeRef.current.getBoundingClientRect());
        setCoordinate(nodeRef.current.getBoundingClientRect());
        setShow(!show);
    };
    return (
        <div className="relative w-full max-w-[400px]" ref={nodeRef}>
            <div
                className="w-full p-5 border border-gray-200 rounded-lg cursor-pointer"
                onClick={handleClick}
            >
                Selected
            </div>
            {show && <DropdownList coordinate={coordinate}></DropdownList>}
        </div>
    );
};
function DropdownList({ coordinate }) {
    if (typeof document === "undefined") return;
    return ReactDOM.createPortal(
        <div
            className="absolute left-0 w-full bg-white border border-gray-200 rounded-lg top-full"
            style={{
                left: coordinate.left,
                top: coordinate.top + coordinate.height + window.scrollY,
                width: coordinate.width,
            }}
        >
            <div className="p-5 cursor-pointer">Javascript</div>
            <div className="p-5 cursor-pointer">ReactJS</div>
            <div className="p-5 cursor-pointer">VueJS</div>
        </div>,
        document.querySelector("body")
    );
}
export default DropdownPortal;
