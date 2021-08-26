import {connect} from 'react-redux';
import Archive from './Archive';

const mapStateToProps = state => {
    return {
        tasks: state.tasksReducer.tasks,
        darkTheme: state.themeReducer.darkTheme
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

const ArchiveContainer = connect(mapStateToProps, mapDispatchToProps)(Archive)

export default ArchiveContainer