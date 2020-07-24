// Absolute imports
import React from 'react'

const Texts = (props) => {
    return (
        <div>
            <button onClick={props.addNewText}>
                add text
            </button>

            {props.texts.map(t => {
                return <p key={t}>{t}</p>
            })}
        </div>
    )
}

export default Texts;