import {connect} from 'react-redux';
import TaskInput from './TaskInput';
import {addTask, updateSelect, updateTextarea} from '../../../redux/reducers/tasksReducer/tasksActionCreators';

const mapStateToProps = state => {
    return {
        textarea: state.tasksReducer.textarea,
        select: state.tasksReducer.select
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

        addTask: () => {
            dispatch(addTask())
        }
    }
}

const TaskInputContainer = connect(mapStateToProps, mapDispatchToProps)(TaskInput)

export default TaskInputContainer