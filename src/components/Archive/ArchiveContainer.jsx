import {connect} from 'react-redux';
import Archive from './Archive';

const mapStateToProps = state => {
    return {
        archiveTasks: state.tasksReducer.archiveTasks,
        darkTheme: state.themeReducer.darkTheme
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

const ArchiveContainer = connect(mapStateToProps, mapDispatchToProps)(Archive)

export default ArchiveContainer