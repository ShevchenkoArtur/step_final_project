import {ADD_TASK, RESET_TEXTAREA, UPDATE_SELECT, UPDATE_TEXTAREA} from './tasksActionConstatnts';

export const addTask = () => ({type: ADD_TASK})
export const updateTextarea = newValue => ({type: UPDATE_TEXTAREA, newValue})
export const updateSelect = newValue => ({type: UPDATE_SELECT, newValue})
export const resetTextarea = () => ({type: RESET_TEXTAREA})
