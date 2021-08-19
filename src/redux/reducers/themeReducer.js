import {SWITCH_DARK_THEME} from '../actionTypeConstants';

const initialState = {
    darkTheme: false
}

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_DARK_THEME:
            return {
                ...state,
                darkTheme: !state.darkTheme
            }
        default:
            return state
    }
}

export default themeReducer