import React, { useState } from 'react'
import { Nav, NavbarContainer, NavUser, NavMenu, UserName, UserImg, NavItem, NavLinks, NavLogo, Img, NavLogoH } from './navbarelements'
import { IconContext } from 'react-icons/lib'
import logo from './logo.svg';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';
import '../../App.css'
const Navbar = ({ toggle }) => {
    const [anchorEl, setAnchorEl] = useState(false);
    const open = Boolean(anchorEl);

    const handleMenu = () => {
        setAnchorEl(!anchorEl);
    };

    const handleClose = () => {
        setAnchorEl(anchorEl);
    };

    const LogOut = () => {
        localStorage.removeItem('token')
        setAnchorEl(anchorEl);
        window.location.href = '/login'
    };

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='Home'>
                            <Img src={logo} />
                            <NavLogoH>Tweeter</NavLogoH>
                        </NavLogo>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='Home' smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"

                                >Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='explore' smooth={true} duration={500} spy={true}
                                    exact="true">Explore</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='bookmarks' smooth={true} duration={500} spy={true}
                                    exact="true" >Bookmarks</NavLinks>
                            </NavItem>

                        </NavMenu>
                        <NavUser onClick={handleMenu} aria-controls="menu-appbar">
                            <UserImg src="https://i.pinimg.com/236x/83/ac/b1/83acb189d0fc48b18d609085661a7ac4.jpg" />
                            <UserName onClick={handleMenu} aria-controls="menu-appbar">Qamar Tweet</UserName>
                            <Menu className="profilemenu"
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                getContentAnchorEl={null}
                                open={open}
                                onClose={handleClose}>
                                <MenuItem onClick={handleClose} >
                                    <Link to="Profile">Profile</Link>
                                </MenuItem>
                                <MenuItem onClick={LogOut} ><Link>Logout</Link></MenuItem>
                            </Menu>
                        </NavUser>

                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar