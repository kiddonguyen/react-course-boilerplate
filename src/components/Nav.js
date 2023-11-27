import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ListLink } from "../data";
import { handleLinkActive } from "../constants";
const Nav = () => {
    return (
        <>
            <div className="flex items-center justify-center p-5 bg-white shadow-md gap-x-5">
                {ListLink.map((item) => {
                    return (
                        <NavLink
                            className={handleLinkActive}
                            to={item.to}
                            key={item.id}
                        >
                            {item.title}
                        </NavLink>
                    );
                })}
            </div>
            <Outlet></Outlet>
        </>
    );
};

export default Nav;
