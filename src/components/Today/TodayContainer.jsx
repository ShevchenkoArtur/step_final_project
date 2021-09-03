import {connect} from 'react-redux';
import TodayApi from './TodayApi';
import {
    editTaskText,
    getTasks, sortArrBy, toggleNotificationFlags,
} from '../../redux/reducers/tasksReducer/tasksActionCreators';

const mapStateToProps = state => {
    return {
        tasks: state.tasksReducer.tasks,
        todayTasks: state.tasksReducer.todayTasks,
        darkTheme: state.themeReducer.darkTheme,
        prioritySelect: state.tasksReducer.prioritySelect,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTasks: (tasks) => {
            dispatch(getTasks(tasks))
        },

        sortArrBy: (sortBy) => {
            dispatch(sortArrBy(sortBy))
        },

        editTaskText: (id, newValue) => {
            dispatch(editTaskText(id, newValue))
        },

        toggleNotificationFlags: notificationType => {
            dispatch(toggleNotificationFlags(notificationType))
        }
    }
}

const TodayContainer = connect(mapStateToProps, mapDispatchToProps)(TodayApi)

export default TodayContainer