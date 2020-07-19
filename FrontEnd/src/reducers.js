import { combineReducers } from 'redux'

const textsState = ["text1595074783900", "text1595074784312", "text1595074789263" ]
const themesState = [
    {
        'id': 0, 
        'name': "dark"
    },
    {
        'id': 1, 
        'name': "light"
    } 
]

const textsReducer = (state = textsState, action) => {
    if(action.type === 'ADD_NEW_TEXT') {
        return state.concat(action.newText)
    }

    return state
}

const themesReducer = (state = themesState, action) => {
    if(action.type === 'CHANGE_THEME') {
        return [ state[1], state[0] ]
    }
    
    return state
}

export default combineReducers(
    {
        textsReducer, 
        themesReducer
    }    
)