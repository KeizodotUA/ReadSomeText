// Absolute imports
import React from 'react'
import { NavLink, Link } from 'react-router-dom'

// Icons
import Logo from '@icons/logo/logo.png';

// Styled
import {
    Container,
    HeaderLink,
    HeaderLinkContent,
    HomeButton,
    ButtonsContainer,
    Button   
} from './styled';

const Header = () => {
    return (
        <>
            <Container>
                <HomeButton>
                    <HeaderLink to='/'>
                        <HeaderLinkContent>
                            <img src={Logo} style={{height: "40px", verticalAlign:"middle"}} />
                        </HeaderLinkContent>                
                        <HeaderLinkContent>
                            <h3>read some text</h3>
                        </HeaderLinkContent>                    
                    </HeaderLink>  
                </HomeButton>  
                <ButtonsContainer>
                    <Button>
                        General
                    </Button>
                    <Button>
                        Ratings
                    </Button>
                    <Button>
                        Search
                    </Button>
                </ButtonsContainer>                 
            </Container>


            {/* <ul>

                <li><Link to='/recent'>Recent</Link></li>
                <li><Link to='/popular'>Most popular</Link></li>
                <li><Link to='/archive'>Archive</Link></li>
                <li><Link to='/'>Useful stuff</Link></li>
                <li><Link to='/uploads'>Uploads</Link></li>
                <li><Link to='/donate'>Donate</Link></li>
                <li><Link to='/info'>Info</Link></li>


                <li><Link to='/daily-rating'>Daily</Link></li>
                <li><Link to='/weekly-rating'>Weekly</Link></li>
                <li><Link to='/monthly-rating'>Monthly</Link></li>
                <li><Link to='/yearly-rating'>Yearly</Link></li>
                <li><Link to='/custom-rating'>Custom</Link></li>
                <li><Link to='/averages'>Averages</Link></li>


                <li><Link to='/search'>Search</Link></li>


                <li><Link to='/main'>Main</Link></li>
                <li><Link to='/api'>API page</Link></li>
            </ul> */}


        </>
    )
}

export default Header;