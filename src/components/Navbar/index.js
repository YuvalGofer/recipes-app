import React from 'react'
import { Bar, Nav, NavIcon, NavLink } from './navbar';

const Navbar = ({ toogle }) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Recipes
                </NavLink>
                <NavIcon onClick={toogle}>
                    <Bar />
                    {/* <p>Login</p> */}
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
