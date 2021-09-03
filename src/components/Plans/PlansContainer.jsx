import {connect} from 'react-redux';
import PlansApi from './PlansApi';
import {
    editTaskText,
    getTasks,
    toggleNotificationFlags
} from '../../redux/reducers/tasksReducer/tasksActionCreators';

const mapStateToProps = state => {
    return {
        darkTheme: state.themeReducer.darkTheme,
        planTasks: state.tasksReducer.planTasks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTasks: tasks => {
            dispatch(getTasks(tasks))
        },

        editTaskText: (id, newValue) => {
            dispatch(editTaskText(id, newValue))
        },

        toggleNotificationFlags: notificationType => {
            dispatch(toggleNotificationFlags(notificationType))
        }
    }
}

const PlansContainer = connect(mapStateToProps, mapDispatchToProps)(PlansApi)

export default PlansContainer