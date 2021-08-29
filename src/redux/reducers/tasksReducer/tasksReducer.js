import {
    ADD_TASK,
    EDIT_TASK_TEXT, FIND_LATER_TASKS,
    GET_TASKS, GET_TODAY_DATE,
    RESET_TEXTAREA, RESTORE_TASK, SORT_ARR_BY, UPDATE_CATEGORY_SELECT, UPDATE_PRIORITY_SELECT, UPDATE_SORT_SELECT,
    UPDATE_TEXTAREA
} from './tasksActionConstatnts';

const initialState = {
    tasks: [],
    todayTasks: [],

    textarea: {
        value: '',
    },

    categorySelect: {
        value: '',
    },

    prioritySelect: {
        value: ''
    },

    sortSelect: {
      value: ''
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
                todayTasks: action.tasks.filter(el => el.category === 'today' && !el.inBin && !el.isDone)
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
        case RESTORE_TASK:
            return {
                ...state,
                binTasks: state.tasks.filter(el => el.id !== action.id)
            }
        case EDIT_TASK_TEXT:
            return {
                ...state,
                // tasks: state.tasks.filter(el => {
                //     if (el.category === 'today') {
                //         return {
                //             ...el,
                //             body: action.newValue
                //         }
                //     }
                // }),
                // tasks: [...state.tasks, state.tasks.map(el => {
                //     if(el.id === action.id) {
                //         return {
                //             ...el,
                //             body: action.newValue
                //         }
                //     }
                // })]
            }
        case UPDATE_CATEGORY_SELECT:
            return {
                ...state,
                categorySelect: {
                    ...state.categorySelect,
                    value: action.newValue
                }
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
                    value: action.new
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
        case SORT_ARR_BY:
            switch (action.sortBy) {
                case 'byPriority':
                    return {
                        ...state,
                        todayTasks: [...state.todayTasks].sort((a, b) => b.priority - a.priority)
                    }
                case 'backToPriority':
                    return {
                        ...state,
                        todayTasks: [...state.todayTasks].sort((a, b) => a.priority - b.priority)
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
                            category: state.categorySelect.value,
                            priority: state.prioritySelect.value,
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
        default:
            return state
    }
}

export default TasksReducer