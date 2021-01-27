import React from 'react'
import { Foot, FootbarContainer, FootMenu, FootItem, FootLinks, Thefooter } from './Footerbarelements'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const Footbar = () => {
    return (
        <>
            <Thefooter>
                <AppBar show='false' position="fixed" style={{ top: 'auto', bottom: '0', background: '#fff', border: 'none' }}>
                    <Toolbar>
                        <Foot  >
                            <FootbarContainer>
                                <FootMenu>

                                    <FootItem>
                                        <FootLinks to='home' smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                                            <i className="fa fa-home" style={{ color: '#828282', fontSize: '30px' }}></i>
                                        </FootLinks>
                                    </FootItem>

                                    <FootItem>
                                        <FootLinks to='explore' smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                                            <i className="fa fa-compass" style={{ color: '#828282', fontSize: '30px' }}></i>
                                        </FootLinks>
                                    </FootItem>

                                    <FootItem>
                                        <FootLinks to='bookmarks' smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                                            <i className="fa fa-bookmark" style={{ color: '#828282', fontSize: '30px' }}></i>
                                        </FootLinks>
                                    </FootItem>

                                </FootMenu>
                            </FootbarContainer>
                        </Foot>
                    </Toolbar>
                </AppBar>
            </Thefooter>
        </>
    )
}

export default Footbar