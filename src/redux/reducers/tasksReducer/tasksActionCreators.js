import {
    ADD_TASK,
    EDIT_TASK_TEXT,
    FIND_LATER_TASKS,
    GET_TASKS,
    GET_TODAY_DATE,
    SORT_ARR_BY,
    TOGGLE_CALENDAR, UPDATE_CALENDAR_VALUE,
    UPDATE_PRIORITY_SELECT,
    UPDATE_SORT_SELECT,
    UPDATE_TEXTAREA
} from './tasksActionConstatnts';

export const addTask = (id) => ({type: ADD_TASK, id})
export const updateTextarea = newValue => ({type: UPDATE_TEXTAREA, newValue})
export const updatePrioritySelect = newValue => ({type: UPDATE_PRIORITY_SELECT, newValue})
export const updateSortSelect = newValue => ({type: UPDATE_SORT_SELECT, newValue})
export const getTasks = (tasks) => ({type: GET_TASKS, tasks})
export const editTaskText = (id, newValue) => ({type: EDIT_TASK_TEXT, id, newValue})
export const getTodayDate = (date) => ({type: GET_TODAY_DATE, date})
export const findLaterTasks = () => ({type: FIND_LATER_TASKS})
export const sortArrBy = (sortBy) => ({type: SORT_ARR_BY, sortBy})
export const toggleCalendar = () => ({type: TOGGLE_CALENDAR})
export const updateCalendarValue = newValue => ({type: UPDATE_CALENDAR_VALUE, newValue})