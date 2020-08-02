// Absolute imports
import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

// Icons
import Logo from '@icons/logo/logo.png';

// Components
import HeaderButton from './HeaderButton/index'

// Styled
import {
    HeaderContainer,
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

const Header = () => {
    const [selectedButton, setSelected] = useState("");
    
    const headerButtonClick = (name) => {
        if (selectedButton == name)
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
                            <h3>read some text</h3>
                        </HeaderLinkContent>                    
                    </NavigationLink>  
                </HomeButton>  
                <ButtonsContainer>
                {
                    HeaderButtons.map(name => {
                        return <HeaderButton 
                            key = {name}
                            text = {name}
                            isSelected = {name == selectedButton}    
                            clickFunc = { () => {headerButtonClick(name)} }
                            />                        
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
                                            return <NavigationLink to={btn.link}>
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

{
    {/* NavigationButtons.map(category => {
        if (category.name === selectedButton)
            category.buttons.map(button => {
                <NavigationLink to={button.link}>
                    {button.name}
                </NavigationLink>
            })

    }) */}
}

//console.log(NavigationButtons)