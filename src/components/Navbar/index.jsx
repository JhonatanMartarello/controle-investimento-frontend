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
                    <NavLink to='/papel'>
                        Papel
                    </NavLink>
                    <NavLink to='/proventos'>
                        Proventos
                    </NavLink>
                    <NavLink to='/posicao'>
                        Posição
                    </NavLink>
                    <NavLink to='/sign-up'>
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
