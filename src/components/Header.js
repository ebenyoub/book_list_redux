import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <h1>BOOKS</h1>
            <ul className="buttonTab">
                <NavLink
                    to="/"
                >
                    <li>Accueil</li>
                </NavLink>
                <NavLink
                    to="search"
                >
                    <li>Recherche</li>
                </NavLink>
            </ul>
            <Outlet />
        </div>
    );
};

export default Header;
