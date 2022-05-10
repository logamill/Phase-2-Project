import React from 'react';
import { NavLink } from 'react-router-dom'
import Search from './Search';

const ACTIVE = {
    background: 'grey',
    borderRadius: '10px'
}

function NavBar({ handleSearch }) {
    return (
        <div className='navbar' style={{ position: 'sticky', top: 0 }}>
            <NavLink
                to='/'
                exact
                activeStyle={ACTIVE}>
                    Home
            </NavLink>
            <NavLink
                to='/all'
                exact
                activeStyle={ACTIVE}>
                    All
            </NavLink>
            <NavLink
                to='/tops'
                exact
                activeStyle={ACTIVE}>
                    Tops
            </NavLink>
            <NavLink
                to='/bottoms'
                exact 
                activeStyle={ACTIVE}>
                    Bottoms
            </NavLink>
            <NavLink
                to='/accessories'
                exact 
                activeStyle={ACTIVE}>
                    Accessories & Shoes
            </NavLink>
            <NavLink
                to='/favorites'
                exact 
                activeStyle={ACTIVE}>
                    Favorites 
            </NavLink>
            <NavLink
                to='/add'
                exact 
                activeStyle={ACTIVE}>
                    Add Item
            </NavLink>
            <Search handleSearch={handleSearch}/>
        </div>
    )
}

export default NavBar;