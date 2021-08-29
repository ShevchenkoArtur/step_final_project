import {connect} from 'react-redux';
import {
    addTask, updateCategorySelect, updatePrioritySelect,
    updateTextarea
} from '../../../redux/reducers/tasksReducer/tasksActionCreators';
import TaskInputApi from './TaskInputApi';

const mapStateToProps = state => {
    return {
        textarea: state.tasksReducer.textarea,
        categorySelect: state.tasksReducer.categorySelect,
        prioritySelect: state.tasksReducer.prioritySelect,
        darkTheme: state.themeReducer.darkTheme,
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
    }
}

const TaskInputContainer = connect(mapStateToProps, mapDispatchToProps)(TaskInputApi)

export default TaskInputContainer