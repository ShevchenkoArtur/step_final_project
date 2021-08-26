import {connect} from 'react-redux';
import {getTasks} from '../../redux/reducers/tasksReducer/tasksActionCreators';
import InboxApi from './InboxApi';

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
        }
    }
}

const InboxContainer = connect(mapStateToProps, mapDispatchToProps)(InboxApi)

export default InboxContainer