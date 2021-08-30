import {connect} from 'react-redux';
import PlansApi from './PlansApi';
import {getTasks} from '../../redux/reducers/tasksReducer/tasksActionCreators';

const mapStateToProps = state => {
    return {
        darkTheme: state.tasksReducer.darkTheme,
        planTasks: state.tasksReducer.planTasks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTasks: tasks => {
            dispatch(getTasks(tasks))
        }
    }
}

const PlansContainer = connect(mapStateToProps, mapDispatchToProps)(PlansApi)

export default PlansContainer