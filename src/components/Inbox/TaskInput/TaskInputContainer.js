import {connect} from 'react-redux';
import {addTask, updateSelect, updateTextarea} from '../../../redux/reducers/tasksReducer/tasksActionCreators';
import TaskInputApi from './TaskInputApi';

const mapStateToProps = state => {
    return {
        textarea: state.tasksReducer.textarea,
        select: state.tasksReducer.select,
        darkTheme: state.themeReducer.darkTheme
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateTextarea: newValue => {
            dispatch(updateTextarea(newValue))
        },

        updateSelect: newValue => {
            dispatch(updateSelect(newValue))
        },

        addTask: (id) => {
            dispatch(addTask(id))
        }
    }
}

const TaskInputContainer = connect(mapStateToProps, mapDispatchToProps)(TaskInputApi)

export default TaskInputContainer