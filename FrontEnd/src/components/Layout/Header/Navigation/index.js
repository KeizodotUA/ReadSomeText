// Absolute imports
import React from 'react'

// Shared
import { NavigationLink } from '@shared/'

// Styled
import {
    Container,
    NavigationButton
} from './styled';

const NavigationButtons = [
    {
        name: "General",
        buttons: [
            {
                link: "/recent",
                name: "Recent",
                isImplemented: false
            },
            {
                link: "/popular",
                name: "Most popular",
                isImplemented: false
            },
            {
                link: "/archive",
                name: "Archive",
                isImplemented: false
            },
            {
                link: "/uploads",
                name: "Uploads",
                isImplemented: false
            },
            {
                link: "/donate",
                name: "Donate",
                isImplemented: false
            },
            {
                link: "/info",
                name: "Info",
                isImplemented: true
            },
            {
                link: "/",
                name: "Useful stuff",
                isImplemented: false
            }
        ]
    },
    {
        name: "Ratings",
        buttons: [
            {
                link: "/daily-rating",
                name: "Daily",
                isImplemented: false
            },
            {
                link: "/weekly-rating",
                name: "Weekly",
                isImplemented: false
            },
            {
                link: "/monthly-rating",
                name: "Monthly",
                isImplemented: false
            },
            {
                link: "/yearly-rating",
                name: "Yearly",
                isImplemented: false
            },
            {
                link: "/custom-rating",
                name: "Custom",
                isImplemented: false
            },
            {
                link: "/averages",
                name: "Averages",
                isImplemented: false
            }
        ]
    },
    {
        name: "Search",
        buttons: [
            {
                link: "/search",
                name: "Search",
                isImplemented: false
            }
        ]
    },
    {
        name: "Test",
        buttons: [
            {
                link: "/main",
                name: "Main",
                isImplemented: true
            },
            {
                link: "/api",
                name: "API page",
                isImplemented: true
            }
        ]
    }
]

const Navigation = (props) => {
    return (
        <Container>
            {
                NavigationButtons.map(cat => {
                    if (cat.name === props.selectedButton) {
                        return cat.buttons.map(btn => {
                            return <NavigationLink key={btn.name} to={btn.link}>
                                <NavigationButton btnColor={btn.isImplemented ? "#d5d8dd" : "#4e5560"}>
                                    {btn.name}
                                </NavigationButton>
                            </NavigationLink>
                        })
                    }
                })
            }
        </Container>
    )
}

export default Navigation;