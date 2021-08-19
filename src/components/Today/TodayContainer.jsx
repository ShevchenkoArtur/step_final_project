import Today from './Today'
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        todayTasks: state.tasksReducer.todayTasks,
        darkTheme: state.themeReducer.darkTheme
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

const TodayContainer = connect(mapStateToProps, mapDispatchToProps)(Today)

export default TodayContainer