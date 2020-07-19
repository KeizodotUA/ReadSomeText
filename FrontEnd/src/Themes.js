import React, { Component } from 'react'

export default class Themes extends Component {
    render() {
        const selectedTheme = this.props.themes[0]
        return (
            <div>
                <button onClick={this.props.changeTheme}>
                    CHANGE THEME
                </button>

                <p key={selectedTheme.id}>{"selected theme: " + selectedTheme.name}</p>
            </div>
        )

    }
}