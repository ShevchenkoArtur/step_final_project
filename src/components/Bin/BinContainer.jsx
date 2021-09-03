import {connect} from 'react-redux';
import {getTasks, toggleNotificationFlags} from '../../redux/reducers/tasksReducer/tasksActionCreators';
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
        getTasks: (tasks) => {
            dispatch(getTasks(tasks))
        },

        toggleNotificationFlags: (notificationType) => {
            dispatch(toggleNotificationFlags(notificationType))
        }
    }
}

const BinContainer = connect(mapStateToProps, mapDispatchToProps)(BinApi)

export default BinContainer