// Absolute imports
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Components
import Layout from '../Layout'

// API
import { getTextInfoById } from '@api/Faker';
import { getText } from '@api/index.js';

// Styled
import { 
    TitleContainer,
    CountContainer,
    TextContainer,
    Container,
    InfoContent,
    CountContent,
    H2,
    H3
 } from './styled';

 const INITIAL_TEXT_INFO = {
    id: 0,
    author: "Loading...",
    title: "Loading...",
    views: "Loading...",
    likes: "Loading...",
    bookmarkts: "Loading...",
}

const Text = (props) => {
    const [textInfo, setTextInfo] = useState(INITIAL_TEXT_INFO);
    const [text, setText] = useState("Loading...");

    const fetchTextInfo = () => {
        getTextInfoById(props.match.params.textId)
        .then(setTextInfo);
    };

    const fetchText = () => {
        getText().then(setText);
    };

    useEffect(() => {
        fetchTextInfo();
        fetchText();
    }, []);
    
    return (
        <Container>
            <TitleContainer>
                <InfoContent>
                    <H2>{textInfo.author}</H2>
                </InfoContent>
                <InfoContent>
                    <H3>{textInfo.title}</H3>
                </InfoContent>               
            </TitleContainer>
            <CountContainer>
                <InfoContent>
                    <H2>Views</H2>
                </InfoContent>
                <InfoContent>
                    <H3>{textInfo.views}</H3>
                </InfoContent>  
            </CountContainer>
            <CountContainer>
                <CountContent style={{float: "left"}}>
                    <H2 style={{marginLeft: "30px", marginRight: "5px"}}>Likes</H2>
                    <H3 style={{marginLeft: "30px", marginRight: "5px"}}>{textInfo.likes}</H3>
                </CountContent>
                <CountContent style={{float: "right"}}>
                    <H2 style={{marginRight: "30px", marginLeft: "5px"}}>Bookmarkts</H2>
                    <H3 style={{marginRight: "30px", marginLeft: "5px"}}>{textInfo.bookmarkts}</H3>
                </CountContent>
            </CountContainer>
            <TextContainer>
                {text}
            </TextContainer>
        </Container>

    )
}

Text.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            textId: PropTypes.string.isRequired,
        }).isRequired,
    })
};

export default Layout()(Text);