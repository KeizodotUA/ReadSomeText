// Absolute imports
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Actions
import { changeTheme } from '@actions/theme'

// Loaders
import Themes from './Themes/Loadable'

// Components
import Layout from '../Layout'

const Main = (props) => {
  return (
    <div>
      <Themes
        theme={props.theme}
        changeTheme={props.changeTheme}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeTheme: bindActionCreators(changeTheme, dispatch)
  }
}

export default Layout()(connect(mapStateToProps, mapDispatchToProps)(Main))