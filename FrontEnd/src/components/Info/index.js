// Absolute imports
import React from 'react'
import styled from 'styled-components';

// Components
import Layout from '../Layout'

// Styled
import {
    Container,
    StyledLink
} from './styled';

const About = () => {
    return (
        <Container>
            <h2 style={{fontSize: "28px"}}>About</h2>
            <p>Site created for educational purposes only.</p>            
            Used stuff:
            <br/>
            Site logo - <StyledLink href="https://www.iconfinder.com/">www.iconfinder.com</StyledLink>
            <br/>
            Color themes - <StyledLink href="https://discord.com/">discord.com</StyledLink>
            <br/>
            Site structure - <StyledLink href="https://moongourd.com/">moongourd.com</StyledLink>
            <br/>
            Texts from <StyledLink href="https://baconipsum.com/">baconipsum.com</StyledLink>
        </Container>
    )
}

export default Layout()(About);
