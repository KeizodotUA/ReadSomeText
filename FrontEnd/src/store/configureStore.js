// Absolute imports
import { createStore } from 'redux';

// Reducers
import reducers from '../reducers';

import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const store = createStore(
    reducers,
    persistedState);

store.subscribe(() => { saveState(store.getState()); });    
    
export default store;
