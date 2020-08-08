// Absolute imports
import React from 'react'
import styled from 'styled-components';

// Components
import Layout from '../Layout'

const Wrapper = styled.div`
    padding: 10px;
    font-size: 14px;
`;

const About = () => {
    return (
        <Wrapper>
            <h2 style={{fontSize: "28px"}}>About</h2>
            <p>Site created for educational purposes only.</p>            
            Used stuff:
            <br/>
            Site logo - <a href="https://www.iconfinder.com/">www.iconfinder.com</a>
            <br/>
            Color themes - <a href="https://discord.com/">discord.com</a>
            <br/>
            Site structure - <a href="https://moongourd.com/">moongourd.com</a>
            <br/>
            Texts from <a href="https://baconipsum.com/">baconipsum.com</a>
            
        </Wrapper>
    )
}

export default Layout()(About);
