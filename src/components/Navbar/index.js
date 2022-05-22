import React from 'react'
import { Bar, Nav, NavIcon, NavLink } from './navbar';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Recipes</NavLink>
                <NavIcon>
                    <p>Login</p>
                    <Bar />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
