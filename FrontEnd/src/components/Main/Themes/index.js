// Absolute imports
import React from 'react'

const Themes = (props) => {
    const selectedTheme = props.themes[0]
    return (
        <div>
            <button onClick={props.changeTheme}>
                CHANGE THEME
                </button>

            <p key={selectedTheme.id}>{"selected theme: " + selectedTheme.name}</p>
        </div>
    )
}

export default Themes;