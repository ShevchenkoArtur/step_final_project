import {connect} from 'react-redux';
import {emptyTrash} from '../../redux/reducers/tasksReducer/tasksActionCreators';
import BinApi from './BinApi';

const mapStateToProps = state => {
    return {
        binTasks: state.tasksReducer.binTasks,
        darkTheme: state.themeReducer.darkTheme
    }
}

const mapDispatchToProps = dispatch => {
    return {
        emptyTrash: () => {
            dispatch(emptyTrash())
        }
    }
}

const BinContainer = connect(mapStateToProps, mapDispatchToProps)(BinApi)

export default BinContainer