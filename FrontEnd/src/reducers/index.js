import { combineReducers } from 'redux';

import texts from './texts'
import themes from './themes'

export default combineReducers(
    {
        texts, 
        themes
    }    
)