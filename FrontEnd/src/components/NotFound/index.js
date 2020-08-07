// Absolute imports
import React from 'react'

// Shared
import { NavigationLink } from '@shared/'

// Styled
import {
    Container,
    Content,
    HomeButton
} from './styled';


const NotFound = () => {
    return (
        <Container>
            <Content>
                <h3>404 Not Found!</h3>
            </Content>
            <Content>
                <h2>The page you requested doesn't exist, or may have been removed.</h2>
                </Content>
            <Content>
                <NavigationLink to="/">
                    <HomeButton>Go to Home</HomeButton>
                </NavigationLink>                
            </Content>  
        </Container>
    )
}

export default NotFound;