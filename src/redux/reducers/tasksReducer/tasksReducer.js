import {
    ADD_TASK,
    EDIT_TASK_TEXT, EMPTY_TRASH, FIND_LATER_TASKS,
    GET_TASKS, GET_TODAY_DATE, MOVE_TASK_INTO_BIN,
    RESET_TEXTAREA, RESTORE_TASK,
    UPDATE_SELECT,
    UPDATE_TEXTAREA
} from './tasksActionConstatnts';

const initialState = {
    tasks: [],
    binTasks: [],

    textarea: {
        value: '',
    },

    select: {
        value: 'inbox',
    },

    todayDate: null
}

const TasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODAY_DATE:
            return {
                ...state,
                todayDate: action.date,
            }
        case GET_TASKS:
            return {
                ...state,
                tasks: action.tasks,
                binTasks: state.tasks.filter(el => el.inBin)
            }
        case FIND_LATER_TASKS:
            const getFormatDate = (date) => {
                let [year, month, another] = date.split('-')
                let [day] = another.split('T')
                return new Date(year, month - 1, day)
            }
            state.tasks.map(el => {
                if (state.todayDate < getFormatDate(el.createdAt)) {
                    return {
                        ...el,
                        isLate: true
                    }
                }
            })
        case MOVE_TASK_INTO_BIN:
            return {
                ...state,
                tasks: state.tasks.filter(el => el.id !== action.id),
                binTasks: [...state.binTasks, ...state.tasks.filter(el => el.id === action.id)]
            }
        case RESTORE_TASK:
            return {
                ...state,
                binTasks: state.tasks.filter(el => el.inBin)
            }
        case EMPTY_TRASH:
            return {
                ...state,
                tasks: state.tasks.filter(el => !el.inBin),
                binTasks: state.tasks.filter(el => el.inBin)
            }
        case EDIT_TASK_TEXT:
            return {
                ...state,
                tasks: state.tasks.map(el => {
                    if (el.id === action.id) {
                        return {
                            ...el,
                            body: action.newValue
                        }
                    }
                }),
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
            if (state.textarea.value !== '') {
                return {
                    ...state,
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
        default:
            return state
    }
}

export default TasksReducer