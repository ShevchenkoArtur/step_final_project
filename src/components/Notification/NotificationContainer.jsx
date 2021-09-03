import {connect} from 'react-redux';
import Notification from './Notification';

const mapStateToProps = state => {
    return {
        notification: state.tasksReducer.notification
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

const NotificationContainer = connect(mapStateToProps, mapDispatchToProps)(Notification)

export default NotificationContainer