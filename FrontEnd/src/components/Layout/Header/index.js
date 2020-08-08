// Absolute imports
import React, { useState, useEffect } from 'react'

// Icons
import Logo from '@icons/logo/logo.png';

// Components
import Navigation from './Navigation'
import LogInForm from './LogInForm'

// Shared
import { NavigationLink } from '@shared/'

// Styled
import {
    HeaderContainer,
    HeaderButton,
    HeaderLinkContent,
    HomeButton,
    ButtonsContainer,
    LogInButton
} from './styled';

const HeaderButtons = [ "General", "Ratings", "Search", "Test"];

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

const Header = () => {
    const [selectedButton, setSelected] = useState("");
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    
    useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    const headerButtonClick = (name) => {
        if(selectedButton == name)
            setSelected("")
            else
            setSelected(name)
    }

const isVisibleNavigationContainer = selectedButton !== "" || selectedButton !== "logIn"
const isVisibleLogInForm = selectedButton === "logIn"

    return (
        <>
            <HeaderContainer>
                <HomeButton>
                    <NavigationLink to='/'>
                        <HeaderLinkContent>
                            <img src={Logo} style={{height: "40px", verticalAlign:"middle"}} />
                        </HeaderLinkContent>                
                        <HeaderLinkContent>
                        {
                            windowDimensions.width > 850 ?
                               <h3>read some text</h3> :
                               <h3>rst</h3>
                        }                            
                        </HeaderLinkContent>                    
                    </NavigationLink>  
                </HomeButton>  
                <ButtonsContainer>
                {
                    HeaderButtons.map(name => {
                        return <HeaderButton 
                            key = {name}
                            btnColor = {name == selectedButton ? "#f9b2b2" : "#d5d8dd"}    
                            onClick = { () => {headerButtonClick(name)}}>
                                {name}
                            </HeaderButton>                       
                    })
                }
                </ButtonsContainer>
                <LogInButton onClick = { () => {headerButtonClick("logIn")}}>
                    Log In
                </LogInButton>
            </HeaderContainer>            
            { isVisibleNavigationContainer && <Navigation selectedButton={selectedButton} /> }
            { isVisibleLogInForm && <LogInForm/> }         
        </>
    )
}

export default Header;