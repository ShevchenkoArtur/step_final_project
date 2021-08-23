import {combineReducers, createStore} from "redux";
import tasksReducer from './reducers/tasksReducer/tasksReducer'
import themeReducer from './reducers/themeReducer';

const reducers = combineReducers({
    tasksReducer,
    themeReducer,
})

const store = createStore(reducers)

export default store