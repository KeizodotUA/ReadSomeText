const INITIAL_STATE = [
    {
        'id': 0, 
        'name': "dark"
    },
    {
        'id': 1, 
        'name': "light"
    } 
]

export default (state = INITIAL_STATE, action) => {
    if(action.type === 'CHANGE_THEME') {
        return [ state[1], state[0] ]
    }
    
    return state
}