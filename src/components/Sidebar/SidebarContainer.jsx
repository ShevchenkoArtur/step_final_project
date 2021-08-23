import {connect} from 'react-redux';
import Sidebar from './Sidebar';

const mapStateToProps = state => {
    return {
        darkTheme: state.themeReducer.darkTheme,
        todayTasks: state.tasksReducer.todayTasks,
        inboxTasks: state.tasksReducer.inboxTasks,
        archiveTasks: state.tasksReducer.archiveTasks,
        binTasks: state.tasksReducer.binTasks
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)

export default SidebarContainer