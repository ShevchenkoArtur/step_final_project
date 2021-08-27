import {
    ADD_TASK, CHANGE_PRIORITY,
    EDIT_TASK_TEXT, FIND_LATER_TASKS,
    GET_TASKS, GET_TODAY_DATE,
    RESET_TEXTAREA, RESTORE_TASK, SORT_BY, UPDATE_CATEGORY_SELECT,
    UPDATE_TEXTAREA
} from './tasksActionConstatnts';

export const addTask = (id) => ({type: ADD_TASK, id})
export const updateTextarea = newValue => ({type: UPDATE_TEXTAREA, newValue})
export const updateCategorySelect = newValue => ({type: UPDATE_CATEGORY_SELECT, newValue})
export const resetTextarea = () => ({type: RESET_TEXTAREA})
export const restoreTask = (id) => ({type: RESTORE_TASK, id})
export const getTasks = (tasks) => ({type: GET_TASKS, tasks})
export const editTaskText = (id, newValue) => ({type: EDIT_TASK_TEXT, id, newValue})
export const getTodayDate = (date) => ({type: GET_TODAY_DATE, date})
export const findLaterTasks = () => ({type: FIND_LATER_TASKS})
export const changePriority = (newValue) => ({type: CHANGE_PRIORITY, newValue})
export const sortBy = (sortBy, arr) => ({type: SORT_BY, sortBy, arr})
export const updateSortSelect = newValue => ({type: UPDATE_CATEGORY_SELECT, newValue})