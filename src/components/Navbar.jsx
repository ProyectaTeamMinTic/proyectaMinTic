import React, { useState } from "react";
import logo from "media/logo_blue.png";
import { NavLink } from "react-router-dom";

const NavbarLinks = () => {
    return (
        <ul className="flex justify-around w-full">
            <SidebarRoute to="/" title="Inicio" icon="fas fa-home" />
            <SidebarRoute to="/about" title="Nosotros" icon="fas fa-users" />
            <SidebarRoute
                to="/auth/login"
                title="Iniciar sesión"
                icon="fas fa-sign-in-alt"
            />
        </ul>
    )
}

const NavbarLinksResponsive = () => {
    return (
        <ul className="mt-12">
            <SidebarRoute to="/" title="Inicio" icon="fas fa-home" />
            <SidebarRoute to="/about" title="Nosotros" icon="fas fa-users" />
            <SidebarRoute
                to="/auth/login"
                title="Iniciar sesión"
                icon="fas fa-sign-in-alt"
            />
        </ul>
    )
}

const Logo = () => {
    return (
        <div className="p-2 items-center justify-center">
            <img src={logo} alt="Logo" className="w-12 " />
        </div>
    );
};

const Navbar = () => {
    const [open, setOpen] = useState(true);
    return (
        <div className="flex flex-row md:flex-row flex-no-wrap md:h-full">
            <div className="navbar hidden md:flex ">
                {/* <div className="px-8"> */}
                <Logo />
                <NavbarLinks />
                {/* </div> */}
            </div>
            <div className=" md:hidden w-full justify-between bg-gray-800 p-2 text-white h-8">
                <i
                    className={`fas fa-${open ? "times" : "bars"}`}
                    onClick={() => setOpen(!open)}
                />
            </div>
            {open && <ResponsiveNavbar />}
            {/* Sidebar ends */}
        </div>
    );
};
const ResponsiveNavbar = () => {
    return (
        <div>
            <div
                className="navbarResponsive h-full z-40 absolute md:h-full md:hidden transition duration-150 ease-in-out"
                id="mobile-nav"
            >
                <div className="px-8 ">
                    <Logo />
                    <NavbarLinksResponsive />
                </div>
            </div>
        </div>
    );
};
const SidebarRoute = ({ to, title, icon }) => {
    return (
        <li >
            <NavLink
                to={to}
                className={({ isActive }) =>
                    isActive
                        ? "sidebar-route text-white  border-blue-700"
                        : "sidebar-route text-white  hover:border-blue-700"
                }
            >
                <div className="flex items-center">
                    <i className={icon} />
                    <span className="text-sm  ml-2">{title}</span>
                </div>
            </NavLink>
        </li>
    );
};
export default Navbar
