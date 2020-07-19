import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Texts from '../Texts'
import Themes from '../Themes'
import { addNewText } from '@actions/text'
import { changeTheme } from '@actions/theme'

class Layout extends Component {
  render() {
    return (
      <div>
        <Themes
          themes={this.props.themes}
          changeTheme={this.props.changeTheme}
        />
        <Texts
          texts={this.props.texts}
          addNewText={this.props.addNewText}
        />
      </div>
    )
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(Layout)