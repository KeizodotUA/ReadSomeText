// Styles
import { lightTheme, darkTheme } from "../styles/theme";

const INITIAL_STATE = lightTheme;

export default (state = INITIAL_STATE, action) => {
    if(action.type === 'CHANGE_THEME') {
        return action.currentTheme == 'light' ?
            darkTheme :
            lightTheme
    }
    
    return state
}