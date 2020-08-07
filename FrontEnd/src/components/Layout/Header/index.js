// Absolute imports
import React, { useState, useEffect } from 'react'

// Icons
import Logo from '@icons/logo/logo.png';

// Styled
import {
    HeaderContainer,
    HeaderButton,
    NavigationContainer,
    NavigationLink,
    HeaderLinkContent,
    HomeButton,
    ButtonsContainer,
    NavigationButton
} from './styled';

const HeaderButtons = [ "General", "Ratings", "Search", "Test"];

const NavigationButtons = [
    {
        name: "General",
        buttons: [
            {
                link: "/recent",
                name: "Recent"
            },
            {
                link: "/popular",
                name: "Most popular"
            },
            {
                link: "/archive",
                name: "Archive"
            },
            {
                link: "/uploads",
                name: "Uploads"
            },
            {
                link: "/donate",
                name: "Donate"
            },
            {
                link: "/info",
                name: "Info"
            },
            {
                link: "/",
                name: "Useful stuff"
            }            
        ]
    },
    {
        name: "Ratings",
        buttons: [
            {
                link: "/daily-rating",
                name: "Daily"
            },
            {
                link: "/weekly-rating",
                name: "Weekly"
            },
            {
                link: "/monthly-rating",
                name: "Monthly"
            },
            {
                link: "/yearly-rating",
                name: "Yearly"
            },
            {
                link: "/custom-rating",
                name: "Custom"
            },
            {
                link: "/averages",
                name: "Averages"
            }           
        ]
    },
    {
        name: "Search",
        buttons: [
            {
                link: "/search",
                name: "Search"
            }         
        ]
    },
    {
        name: "Test",
        buttons: [
            {
                link: "/main",
                name: "Main"
            },
            {
                link: "/api",
                name: "API page"
            }          
        ]
    }
]

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
const isVisibleNavigationContainer = selectedButton !== ""

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
            </HeaderContainer>            
                {
                    isVisibleNavigationContainer &&
                                            
                        <NavigationContainer>
                            {
                                NavigationButtons.map(cat => {
                                    if(cat.name === selectedButton)
                                    {
                                        return cat.buttons.map(btn => {
                                            return <NavigationLink key={btn.name} to={btn.link}>
                                                <NavigationButton>{btn.name}</NavigationButton>
                                            </NavigationLink>
                                        })
                                    }
                                    
                                }) 
                            }
                        </NavigationContainer>                                   
                }         
        </>
    )
}

export default Header;