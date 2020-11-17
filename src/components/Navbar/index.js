import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./styles.css"
import HamburguerMenu from '../HamburguerMenu'
import PerfileImage from '../PerfileImage'

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

            <ul className={`navbar-menu ${menu || "navbar-menu__close"}`}>
                <NavLink to="/stories" className="navbar-menu__link" activeClassName="navbar-menu_active">
                    Explorar
                </NavLink>
                <NavLink to="/mywork" className="navbar-menu__link" activeClassName="navbar-menu_active">
                    Mis historias
                </NavLink>
            </ul>

            <Link to="/perfile" className="navbar-menu_perfile" >
                <PerfileImage />
            </Link>

        </nav>
    )
}
