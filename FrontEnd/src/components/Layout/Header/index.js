// Absolute imports
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Icons
import BlackLogo from '@icons/logo/blogo.png';
import WhiteLogo from '@icons/logo/wlogo.png';

// Components
import Navigation from './Navigation'
import LogInForm from './LogInForm'

// Shared
import { NavigationLink } from '@shared/'

// Actions
import { changeTheme } from '@actions/theme';

// Styled
import {
    HeaderContainer,
    HeaderButton,
    HeaderLinkContent,
    HomeButton,
    ButtonsContainer,
    LogInButton
} from './styled';

const HeaderButtons = [ "General", "Ratings", "Search"];

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

const Header = (props) => {
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
                            <img 
                                src={props.theme.name === "dark" ? WhiteLogo : BlackLogo} 
                                style={{height: "40px", verticalAlign:"middle", background: "inherit"}} />
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
                            isSelected = {name == selectedButton}    
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
            { isVisibleNavigationContainer && <Navigation selectedButton={selectedButton} theme={props.theme} changeTheme={props.changeTheme} /> }
            { isVisibleLogInForm && <LogInForm/> }         
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        theme: state.theme
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeTheme: bindActionCreators(changeTheme, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);