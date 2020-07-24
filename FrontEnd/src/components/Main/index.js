// Absolute imports
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Actions
import { addNewText } from '@actions/text'
import { changeTheme } from '@actions/theme'

// Loaders
import Texts from './Texts/Loadable'
import Themes from './Themes/Loadable'

// Components
import Layout from '../Layout'

// Styled
import { MyButton } from './styled';

const Main = (props) => {
  return (
    <div>
      <Themes
        themes={props.themes}
        changeTheme={props.changeTheme}
      />
      <Texts
        texts={props.texts}
        addNewText={props.addNewText}
      />
      <MyButton> Styled button </MyButton>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    texts: state.texts,
    themes: state.themes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewText: bindActionCreators(addNewText, dispatch),
    changeTheme: bindActionCreators(changeTheme, dispatch)
  }
}

export default Layout()(connect(mapStateToProps, mapDispatchToProps)(Main))