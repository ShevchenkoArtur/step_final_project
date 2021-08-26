import {
    ADD_TASK,
    DELETE_TASK,
    GET_TASKS,
    RESET_TEXTAREA,
    UPDATE_SELECT,
    UPDATE_TEXTAREA
} from './tasksActionConstatnts';

export const addTask = (id) => ({type: ADD_TASK, id})
export const updateTextarea = newValue => ({type: UPDATE_TEXTAREA, newValue})
export const updateSelect = newValue => ({type: UPDATE_SELECT, newValue})
export const resetTextarea = () => ({type: RESET_TEXTAREA})
export const deleteTask = (id) => ({type: DELETE_TASK, id})
export const getTasks = (tasks) => ({type: GET_TASKS, tasks})
