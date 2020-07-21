import React, { Component } from 'react'

export default class Texts extends Component {
    render () {        
        return(
            <div>
                {/* <button onClick={this.props.addNewText}>
                    add text
                </button> */}

                {this.props.texts.map(t => {
                    return <p key={t}>{t}</p>
                })}

            </div>  
        )
        
    }
}