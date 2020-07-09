// Absolute imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Styles
import 'src/styles/index.css';

// Redux store
import store from './store/configureStore';

// Components
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    window.document.getElementById('root'),
);