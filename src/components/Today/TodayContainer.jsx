import Today from './Today'
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        todayTasks: state.tasksReducer.todayTasks
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

const TodayContainer = connect(mapStateToProps, mapDispatchToProps)(Today)

export default TodayContainer