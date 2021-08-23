import {ADD_TASK, RESET_TEXTAREA, UPDATE_SELECT, UPDATE_TEXTAREA} from './tasksActionConstatnts';

const initialState = {
    todayTasks: [],
    inboxTasks: [],
    archiveTasks: [],
    binTasks: [],

    textarea: {
        value: '',
    },

    select: {
        value: 'inbox',
    }
}

const TasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SELECT:
            return {
                ...state,
                select: {
                    ...state.select,
                    value: action.newValue
                }
            }
        case UPDATE_TEXTAREA:
            return {
                ...state,
                textarea: {
                    ...state.textarea,
                    value: action.newValue
                }
            }
        case RESET_TEXTAREA:
            return {
                ...state,
                textarea: {
                    ...state.textarea,
                    value: ''
                }
            }
        case ADD_TASK:
            switch (state.select.value) {
                case 'today':
                    if (state.textarea.value !== '') {
                        return {
                            ...state,
                            todayTasks: [...state.todayTasks, {body: state.textarea.value}],
                            textarea: {
                                ...state.textarea,
                                value: ''
                            }
                        }
                    }
                case 'inbox':
                    if (state.textarea.value !== '') {
                        return {
                            ...state,
                            inboxTasks: [...state.inboxTasks, {body: state.textarea.value}],
                            textarea: {
                                ...state.textarea,
                                value: ''
                            }
                        }
                    }
                default:
                    return state
            }
        default:
            return state
    }
}

export default TasksReducer