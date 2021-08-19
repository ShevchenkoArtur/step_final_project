import {connect} from 'react-redux';
import Bin from './Bin';

const mapStateToProps = state => {
    return {
        binTasks: state.tasksReducer.binTasks,
        darkTheme: state.themeReducer.darkTheme
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

const BinContainer = connect(mapStateToProps, mapDispatchToProps)(Bin)

export default BinContainer