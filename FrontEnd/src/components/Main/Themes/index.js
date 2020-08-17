// Absolute imports
import React from 'react'

const Themes = (props) => {
    const selectedTheme = props.theme;
    return (
        <div>
            <button onClick={() =>props.changeTheme(props.theme.name)}>
                CHANGE THEME
                </button>

            <p key={selectedTheme.id}>{"selected theme: " + selectedTheme.name}</p>
        </div>
    )
}

export default Themes;