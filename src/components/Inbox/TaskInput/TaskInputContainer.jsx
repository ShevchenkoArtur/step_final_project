import {connect} from 'react-redux';
import {
    addTask,
    changePriority, updateCategorySelect,
    updateTextarea
} from '../../../redux/reducers/tasksReducer/tasksActionCreators';
import TaskInputApi from './TaskInputApi';

const mapStateToProps = state => {
    return {
        textarea: state.tasksReducer.textarea,
        categorySelect: state.tasksReducer.categorySelect,
        darkTheme: state.themeReducer.darkTheme,
        priority: state.tasksReducer.priority
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

        changePriority: newValue => {
            dispatch(changePriority(newValue))
        },

        addTask: (id) => {
            dispatch(addTask(id))
        }
    }
}

const TaskInputContainer = connect(mapStateToProps, mapDispatchToProps)(TaskInputApi)

export default TaskInputContainer