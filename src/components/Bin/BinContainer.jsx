import {connect} from 'react-redux';
import {emptyTrash, getTasks, restoreTask} from '../../redux/reducers/tasksReducer/tasksActionCreators';
import BinApi from './BinApi';

const mapStateToProps = state => {
    return {
        tasks: state.tasksReducer.tasks,
        binTasks: state.tasksReducer.binTasks,
        darkTheme: state.themeReducer.darkTheme
    }
}

const mapDispatchToProps = dispatch => {
    return {
        emptyTrash: () => {
            dispatch(emptyTrash())
        },
        restoreTask: (id) => {
          dispatch(restoreTask(id))
        },
        getTasks: (tasks) => {
            dispatch(getTasks(tasks))
        }
    }
}

const BinContainer = connect(mapStateToProps, mapDispatchToProps)(BinApi)

export default BinContainer