import {connect} from 'react-redux';
import Sidebar from './Sidebar';

const mapStateToProps = state => {
    return {
        darkTheme: state.themeReducer.darkTheme,
        tasks: state.tasksReducer.tasks,
        todayTasks: state.tasksReducer.todayTasks,
        planTasks: state.tasksReducer.planTasks,
        notification: state.tasksReducer.notification
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)

export default SidebarContainer