// Absolute imports
import React from 'react'

// Styled
import {
    Container
} from './styled';

const HeaderButton = ({ text, isSelected, clickFunc }) => {
    const color = isSelected ? "#f9b2b2" :  "#e4e6e9"
    return (
        <Container style={{ background: color }} onClick={clickFunc}>
            {text}
        </Container>
    )
}

export default HeaderButton;