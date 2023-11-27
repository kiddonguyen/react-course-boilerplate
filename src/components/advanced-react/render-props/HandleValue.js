import React, { useState } from "react";

const HandleValue = () => {
    return (
        <Input
            render={(value) => <DisplayValue value={value}></DisplayValue>}
        ></Input>
    );
};
const Input = ({ props }) => {
    const [value, setValue] = useState("");
    return (
        <>
            <input
                type="text"
                name=""
                id=""
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="p-3 rounded-md border border-gray-500 w-full max-w-[500px]"
            />
            {props.render(value)}
        </>
    );
};
const DisplayValue = ({ value }) => {
    return <span className="text-3xl text-blue-500 font-bold">{value}</span>;
};
export default HandleValue;
