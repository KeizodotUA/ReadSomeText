// Absolute imports
import React from 'react'

// Styled
import {
    Container,
    Input,
    Button
} from './styled';

const LogInForm = () => {
    return (
        <Container>
            <Input placeholder={"Email"}/>
            <Input placeholder={"Password"}/>
            <Button>Coming soon...</Button>
        </Container>
    )
}

export default LogInForm;