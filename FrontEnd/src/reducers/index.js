// Absolute imports
import { combineReducers } from 'redux';

// Reducers
import texts from './texts'
import themes from './themes'

export default combineReducers(
    {
        texts, 
        themes
    }    
)