import React from 'react';
import { NavLink } from 'react-router-dom'
import Search from './Search';
import uniqloLogo from './images/uniqlo-logo-black-and-white-removebg-preview (1).png'

function NavBar({ handleSearch }) {
    return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul className="navbar-nav">
            <NavLink
                to='/'
                exact
                >
                    <li className="nav-item active">
                    <i className="fa-solid fa-not-equal"></i><img src={uniqloLogo} className="logo-image" alt="logo"/>
                    </li>
            </NavLink>
            <NavLink
                to='/all'
                exact
                >
                    <li className="nav-item active">
                    All
                    </li>                    
            </NavLink>
            <NavLink
                to='/tops'
                exact
                >
                    <li className="nav-item active">
                    Tops
                    </li>
            </NavLink>
            <NavLink
                to='/bottoms'
                exact 
                >
                    <li className="nav-item active">
                    Bottoms
                    </li>
            </NavLink>
            <NavLink
                to='/accessories'
                exact
                >
                    <li className="nav-item active">
                    Accessories & Shoes
                    </li>
            </NavLink>
            <NavLink
            to='/summer'
            exact
            >
                <li className="nav-item active">
                     Summer 2022
                </li>
            </NavLink>
        </ul>
        </div>
        <div className="navbar-nav ml-auto">
        <ul className="navbar-nav">
            <NavLink
                to='/favorites'
                exact
                >
                <i className="fa-solid fa-star"></i>
            </NavLink>
            <NavLink
                to='/add'
                exact
                >
                <i className="fa fa-plus" aria-hidden="true"></i>
            </NavLink>
            <Search handleSearch={handleSearch}/>
        </ul>
        </div>
    </nav>
    )
}

export default NavBar;