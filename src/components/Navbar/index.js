import React from 'react'
import { Bars, Nav, NavBtn, NavBtnLink, NavLink, NavMenu } from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    Logo
                    {/* <img src={require('../../images/logo.svg')} alt='logo'/> */}
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>
                    <NavLink to='/services' activeStyle>
                        Service
                    </NavLink>
                    <NavLink to='/contact-us' activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to='/sign-up' activeStyle>
                        Sign Up
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/sign-in'>Sign in</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar
