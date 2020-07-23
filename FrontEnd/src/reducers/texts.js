const INITIAL_STATE = [
    "text1595074783900", 
    "text1595074784312", 
    "text1595074789263" 
]

export default (state = INITIAL_STATE, action) => {
    if(action.type === 'ADD_NEW_TEXT') {
        return state.concat(action.newText)
    }

    return state
}