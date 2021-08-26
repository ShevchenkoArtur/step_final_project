import {connect} from 'react-redux';
import TodayApi from './TodayApi';
import {deleteTask, getTasks, getTodayTasks} from '../../redux/reducers/tasksReducer/tasksActionCreators';

const mapStateToProps = state => {
    return {
        todayTasks: state.tasksReducer.todayTasks,
        darkTheme: state.themeReducer.darkTheme
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTasks: (tasks) => {
            dispatch(getTasks(tasks))
        },
        deleteTask: (id) => {
            dispatch(deleteTask(id))
        },
    }
}

const TodayContainer = connect(mapStateToProps, mapDispatchToProps)(TodayApi)

export default TodayContainer