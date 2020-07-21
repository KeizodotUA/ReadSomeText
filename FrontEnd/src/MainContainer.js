import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Texts from './Texts'
import Themes from './Themes'
import { addNewText, changeTheme } from './actions'

const MainConteiner = ({ texts, themes, addNewText, changeTheme }) => {
    return (
        <div>
            <Themes themes={themes} changeTheme={changeTheme} />
            <Texts texts={texts} addNewText={addNewText} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        texts: state.textsReducer,
        themes: state.themesReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewText: bindActionCreators(addNewText, dispatch),
        changeTheme: bindActionCreators(changeTheme, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainConteiner)