import {combineReducers, createStore} from "redux";
import tasksReducer from './reducers/tasksReducer'

const reducers = combineReducers({
    tasksReducer,
})

const store = createStore(reducers)

export default store