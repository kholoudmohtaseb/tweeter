import React, { useState, useEffect } from 'react'
import { Foot, FootbarContainer, FootMenu, FootItem, FootLinks } from './Footerbarelements'
import { IconContext } from 'react-icons/lib'

const Footbar = ({ toggle }) => {
    const [scrollFoot, setScrollFoot] = useState(false)
    const changeFoot = () => {
        if (window.scrollY >= 80)
            setScrollFoot(true)
        else
            setScrollFoot(false)

    }
    useEffect(() => {
        window.addEventListener('scroll', changeFoot);
    }, [])
    return (
        <>
            <Foot scrollFoot={scrollFoot} >
                <FootbarContainer>

                    <FootMenu>
                        <FootItem>
                            <FootLinks to='home' smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >Home</FootLinks>
                        </FootItem>
                        <FootItem>
                            <FootLinks to='explore' smooth={true} duration={500} spy={true}
                                exact="true" offset={-80}>Explore</FootLinks>
                        </FootItem>
                        <FootItem>
                            <FootLinks to='bookmarks' smooth={true} duration={500} spy={true}
                                exact="true" offset={-80}>Bookmarks</FootLinks>
                        </FootItem>

                    </FootMenu>

                </FootbarContainer>
            </Foot>
        </>
    )
}

export default Footbar
