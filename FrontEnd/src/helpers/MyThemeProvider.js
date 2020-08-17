// Absolute imports
import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components';

const MyThemeProvider = (props) => {
    return (
        <ThemeProvider theme={props.theme}>
            {props.children}
        </ThemeProvider>
    )
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme
  }
}

export default connect(mapStateToProps)(MyThemeProvider);