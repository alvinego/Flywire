import React from 'react'
import { NavbarContainer, Nav, NavLogo, MobileIcon, NavItem, NavLinks, NavMenu } from './NavbarElements';
import {FaBars} from 'react-icons/fa'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Flywire</NavLogo>
                    <MobileIcon>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>About</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar
