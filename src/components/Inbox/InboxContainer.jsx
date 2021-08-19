import {connect} from 'react-redux';
import Inbox from './Inbox';

const mapStateToProps = state => {
    return {
        inboxTasks: state.tasksReducer.inboxTasks,
        darkTheme: state.themeReducer.darkTheme
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

const InboxContainer = connect(mapStateToProps, mapDispatchToProps)(Inbox)

export default InboxContainer