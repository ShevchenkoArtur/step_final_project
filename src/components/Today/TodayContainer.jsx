import {connect} from 'react-redux';
import TodayApi from './TodayApi';
import {
    editTaskText, findLaterTasks,
    getTasks, getTodayDate,
} from '../../redux/reducers/tasksReducer/tasksActionCreators';

const mapStateToProps = state => {
    return {
        tasks: state.tasksReducer.tasks,
        todayTasks: state.tasksReducer.todayTasks,
        darkTheme: state.themeReducer.darkTheme,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTasks: (tasks) => {
            dispatch(getTasks(tasks))
        },
        sortBy: (sortBy, arr) => {
            dispatch(sortBy(sortBy, arr))
        }
    }
}

const TodayContainer = connect(mapStateToProps, mapDispatchToProps)(TodayApi)

export default TodayContainer