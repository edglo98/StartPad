import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./styles.css"
import HamburguerMenu from '../HamburguerMenu'

export default function Navbar() {

    const [menu, setMenu] = useState(false)

    return (
        <nav className="navbar">
            <div className="hamburguer-menu_view">
                <HamburguerMenu 
                    setState={setMenu}
                    state={menu}
                />
            </div>

            <Link to="/home" className="navbar-title">
                <span>Start Pad</span>
            </Link>

            <ul  className={`navbar-menu ${menu || "navbar-menu__close"}`}>
                <li className="navbar-menu__link">
                    <NavLink to="/location">Explorar</NavLink>
                </li>
                <li className="navbar-menu__link">
                    <NavLink to="/episode">Mis historias</NavLink>
                </li>
            </ul>

            <Link to="/perfile" className="navbar-menu_perfile" >
                <span >
                    img
                </span>
            </Link>

        </nav>
    )
}
