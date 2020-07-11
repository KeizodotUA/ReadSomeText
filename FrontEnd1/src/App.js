// React & Redux
import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// React router
import { BrowserRouter } from 'react-router-dom';

// Actions
import { saveUrl } from '@actions/application';

// Components
import Routes from './Routes';

const App = ({ saveUrl }) => {  
    return (
      // <BrowserRouter>
      //   <Routes />
      // </BrowserRouter>
      <div>Hello Keizo</div>
    );
  };