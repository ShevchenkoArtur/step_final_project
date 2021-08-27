import {connect} from 'react-redux';
import Sort from './Sort';
import {updateSortSelect} from '../../redux/reducers/tasksReducer/tasksActionCreators';

const mapStateToProps = state => {
    return {
        sortSelect: state.tasksReducer.sortSelect
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateSortSelect: newValue => {
            dispatch(updateSortSelect(newValue))
        }
    }
}

const SortContainer = connect(mapStateToProps, mapDispatchToProps)(Sort)

export default SortContainer