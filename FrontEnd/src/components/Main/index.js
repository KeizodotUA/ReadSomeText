import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Texts from './Texts'
import Themes from './Themes'
import Layout from '../Layout'
import { addNewText } from '@actions/text'
import { changeTheme } from '@actions/theme'

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