// Absolute imports
import { createStore } from 'redux';

// Reducers
import reducers from '../reducers';

const store = createStore(reducers)

export default store;
