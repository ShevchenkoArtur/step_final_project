import {connect} from 'react-redux';
import ArchiveApi from './ArchiveApi';
import {getTasks, toggleNotificationFlags} from '../../redux/reducers/tasksReducer/tasksActionCreators';

const mapStateToProps = state => {
    return {
        tasks: state.tasksReducer.tasks,
        darkTheme: state.themeReducer.darkTheme
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTasks: (tasks) => {
            dispatch(getTasks(tasks))
        },

        toggleNotificationFlags: notificationType => {
            dispatch(toggleNotificationFlags(notificationType))
        }
    }
}

const ArchiveContainer = connect(mapStateToProps, mapDispatchToProps)(ArchiveApi)

export default ArchiveContainer