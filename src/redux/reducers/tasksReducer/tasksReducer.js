import {
    ADD_TASK, EDIT_TASK_TEXT,
    GET_TASKS,
    SORT_ARR_BY,
    TOGGLE_CALENDAR, UPDATE_CALENDAR_VALUE,
    UPDATE_PRIORITY_SELECT,
    UPDATE_SORT_SELECT,
    UPDATE_TEXTAREA
} from './tasksActionConstatnts';

const initialState = {
    tasks: [],
    todayTasks: [],
    planTasks: [],

    textarea: {
        value: '',
    },

    prioritySelect: {
        value: ''
    },

    sortSelect: {
        value: ''
    },

    calendar: {
        todayDate: new Date(),
        isOpen: false,
        value: new Date(),
        weekStart: 1,
    },
}


const TasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TASKS:
            return {
                ...state,
                tasks: action.tasks,
                todayTasks: action.tasks.filter(el => el.createdAt >= el.upcomingDate && !el.inBin && !el.isDone),
                planTasks: action.tasks.filter(el => el.upcomingDate > el.createdAt && !el.inBin && !el.isDone)
            }
        case EDIT_TASK_TEXT:
            return {
                ...state,
                tasks: state.tasks.map(el => {
                    if(el.id === action.id) {
                        return {
                            ...el,
                            body: action.newValue
                        }
                    }

                    return el
                })
            }
        case UPDATE_PRIORITY_SELECT:
            return {
                ...state,
                prioritySelect: {
                    ...state.prioritySelect,
                    value: action.newValue
                }
            }
        case UPDATE_SORT_SELECT:
            return {
                ...state,
                sortSelect: {
                    ...state.sortSelect,
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
        case SORT_ARR_BY:
            switch (action.sortBy) {
                case 'byPriority':
                    return {
                        ...state,
                        todayTasks: [...state.todayTasks].sort((a, b) => b.priority - a.priority),
                        planTasks: [...state.planTasks].sort((a, b) => b.priority - a.priority)
                    }
                case 'backToPriority':
                    return {
                        ...state,
                        todayTasks: [...state.todayTasks].sort((a, b) => a.priority - b.priority),
                        planTasks: [...state.planTasks].sort((a, b) => b.priority - a.priority)
                    }
                default :
                    return state
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
                            priority: state.prioritySelect.value ? state.prioritySelect.value : null,
                            upcomingDate: state.calendar.value ? state.calendar.value : state.calendar.todayDate,
                        }
                    ],
                    textarea: {
                        ...state.textarea,
                        value: ''
                    },
                    priority: {
                        ...state.priority,
                        selectedValue: null
                    }
                }
            }
        case TOGGLE_CALENDAR:
            return {
                ...state,
                calendar: {
                    ...state.calendar,
                    isOpen: !state.calendar.isOpen
                }
            }
        case UPDATE_CALENDAR_VALUE:
            return {
                ...state,
                calendar: {
                    ...state.calendar,
                    value: action.newValue,
                    isOpen: false
                }
            }
        default:
            return state
    }
}

export default TasksReducer