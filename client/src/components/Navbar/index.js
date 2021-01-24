import React, { useState, useEffect } from 'react'
import { Nav, NavbarContainer, NavUser, NavMenu, UserName, UserImg, NavItem, NavLinks, NavLogo, Img, NavLogoH } from './navbarelements'
import { IconContext } from 'react-icons/lib'
import logo from './logo.svg';

const Navbar = ({ toggle }) => {
    const [scrollnav, setScrollNav] = useState(false)
    const changeNav = () => {
        if (window.scrollY >= 80)
            setScrollNav(true)
        else
            setScrollNav(false)

    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, [])
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollnav={scrollnav}>
                    <NavbarContainer>
                        <NavLogo to='home'>
                            <Img src={logo} />
                            <NavLogoH>Tweeter</NavLogoH>
                        </NavLogo>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='home' smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                >Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='explore' smooth={true} duration={500} spy={true}
                                    exact="true" offset={-80}>Explore</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='bookmarks' smooth={true} duration={500} spy={true}
                                    exact="true" offset={-80}>Bookmarks</NavLinks>
                            </NavItem>

                        </NavMenu>
                        <NavUser>
                            <UserImg src='https://cdnb.artstation.com/p/assets/images/images/015/193/525/20190113230710/smaller_square/kevin-schneider-miles-morales-print.jpg?1547442431' />
                            <UserName>Qamar Tweet</UserName>
                        </NavUser>

                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
