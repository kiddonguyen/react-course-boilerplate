import React, { useState } from "react";
import "./App.scss";
import ModalBase from "./components/modal/ModalBase";
import TooltipAdvanced from "./components/tooltip/TooltipAdvanced";

function App() {
    const [openModalBase, setOpenModalBase] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className="flex items-center justify-center h-screen p-5">
            <button
                className="p-5 text-center text-white bg-blue-400 rounded-lg"
                onClick={() => {
                    setOpenModalBase(true);
                }}
            >
                Open Modal Base
            </button>
            {/* <button
                className="p-5 ml-5 text-center text-white bg-blue-400 rounded-lg"
                onClick={() => {
                    setOpenModal(true);
                }}
            >
                Open Modal
            </button> */}
            <ModalBase
                visible={openModalBase}
                onClose={() => {
                    setOpenModalBase(false);
                }}
            >
                <div className="p-10 bg-white rounded-lg w-full max-w-[320px]">
                    <TooltipAdvanced title="Tooltip 2">
                        This is tooltip 2
                    </TooltipAdvanced>{" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas asperiores facere quia ex voluptatum in aut alias
                    corrupti odio sequi?
                </div>
            </ModalBase>
            {/* <ModalAdvanced
                visible={openModal}
                onClose={() => {
                    setOpenModal(false);
                }}
                heading="Welcome back"
                bodyClassName="w-full max-w-[400px] bg-white p-10 rounded-lg"
            >
                <div className="flex flex-col gap-3 mb-5">
                    <label htmlFor="email" className="text-sm cursor-pointer">
                        Email address
                    </label>
                    <input
                        type="text"
                        className="w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-4"
                        placeholder="Enter your e-mail"
                    />
                </div>
                <div className="flex flex-col gap-3 mb-5">
                    <label
                        htmlFor="password"
                        className="text-sm cursor-pointer"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        className="w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-4"
                        placeholder="Enter your password"
                    />
                </div>
                <button className="w-full p-4 text-base font-semibold bg-[#316BFF] rounded-lg">
                    Sign in
                </button>
            </ModalAdvanced>
            <div className="inline-block ml-5">
                <TooltipAdvanced title="Tooltip">
                    This is a tooltip
                </TooltipAdvanced>
            </div> */}
        </div>
    );
}
export default App;
