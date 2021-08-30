import {connect} from 'react-redux';
import {
    addTask, getTasks, toggleCalendar, updateCalendarValue, updateCategorySelect, updatePrioritySelect,
    updateTextarea
} from '../../../redux/reducers/tasksReducer/tasksActionCreators';
import TaskInputApi from './TaskInputApi';

const mapStateToProps = state => {
    return {
        textarea: state.tasksReducer.textarea,
        categorySelect: state.tasksReducer.categorySelect,
        prioritySelect: state.tasksReducer.prioritySelect,
        darkTheme: state.themeReducer.darkTheme,
        calendar: state.tasksReducer.calendar
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateTextarea: newValue => {
            dispatch(updateTextarea(newValue))
        },

        updateCategorySelect: newValue => {
            dispatch(updateCategorySelect(newValue))
        },

        updatePrioritySelect: newValue => {
            dispatch(updatePrioritySelect(newValue))
        },

        addTask: (id) => {
            dispatch(addTask(id))
        },

        toggleCalendar: () => {
            dispatch(toggleCalendar())
        },

        updateCalendarValue: newValue => {
            dispatch(updateCalendarValue(newValue))
        },

        getTasks: tasks => {
            dispatch(getTasks(tasks))
        }
    }
}

const TaskInputContainer = connect(mapStateToProps, mapDispatchToProps)(TaskInputApi)

export default TaskInputContainer