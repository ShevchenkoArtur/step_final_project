import {
    ADD_TASK,
    DELETE_TASK, DISPLAY_TODAY_TASKS,
    GET_TASKS, GET_TODAY_TASKS,
    RESET_TEXTAREA,
    UPDATE_SELECT,
    UPDATE_TEXTAREA
} from './tasksActionConstatnts';

const initialState = {
    tasks: [],
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
        case GET_TASKS:
            return {
                ...state,
                tasks: action.tasks,
                todayTasks: state.tasks.filter(el => el.category === 'today'),
                inboxTasks: state.tasks.filter(el => el.category === 'inbox'),
                archiveTasks: state.tasks.filter(el => el.category === 'archive'),
                binTasks: state.tasks.filter(el => el.category === 'bin'),
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(el => el.id !== action.id),
                todayTasks: state.tasks.filter(el => el.category === 'today' && el.id !== action.id),
                inboxTasks: state.tasks.filter(el => el.category === 'inbox' && el.id !== action.id),
                archiveTasks: state.tasks.filter(el => el.category === 'archive' && el.id !== action.id),
                binTasks: state.tasks.filter(el => el.category === 'bin' && el.id !== action.id),
            }
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
                            todayTasks: [
                                ...state.todayTasks,
                                {
                                    id: action.id,
                                    body: state.textarea.value,
                                    category: state.select.value
                                }
                            ],
                            tasks: [
                                ...state.tasks,
                                {
                                    id: action.id,
                                    body: state.textarea.value,
                                    category: state.select.value
                                }
                            ],
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
                            inboxTasks: [...state.inboxTasks,
                                {
                                    body: state.textarea.value,
                                    category: state.select.value
                                }
                            ],
                            tasks: [
                                ...state.tasks,
                                {
                                    body: state.textarea.value,
                                    category: state.select.value
                                }
                            ],
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