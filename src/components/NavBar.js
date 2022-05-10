import React from 'react';
import { NavLink } from 'react-router-dom'
import Search from './Search';


const linkStyles = { 
    display: 'inline-block',
    width: '50px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',  
    color: 'white',
}

function NavBar() {
    return (
        <div className='navbar'>
            <NavLink
                to='/'
                exact
                activeStyle={{
                    background: 'grey'
                }}>
                    Home
                </NavLink>
                <NavLink
                to='/tops'
                exact
                activeStyle={{
                    background: 'grey'
                }}>
                    Tops
                </NavLink>
            <NavLink
                to='/bottoms'
                exact 
                activeStyle={{
                    background: 'grey'
                }}>
                    Bottoms
                </NavLink>
            <NavLink
                to='/add'
                exact 
                activeStyle={{
                    background: 'grey'
                }}>
                    Add Item
                </NavLink>
            <Search />
        </div>
    )
}

export default NavBar;