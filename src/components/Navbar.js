import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

export const Navbar = () => {
    return (
        <header className="titulares header">
            <div className="logo">Laboratorios Sistemas Operativos</div>
            <nav className="menu">
                <ul>
                    <li><i className="fa-solid fa-house"></i><Link to="Home">Home</Link></li>
                    <li><i className="fa-solid fa-briefcase"></i><Link to="Laboratorios">Laboratorios</Link></li>
                </ul>
            </nav>
        </header>
    )
}