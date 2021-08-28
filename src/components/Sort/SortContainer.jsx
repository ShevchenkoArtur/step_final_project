import {connect} from 'react-redux';
import Sort from './Sort';
import {
    updateSortSelect,
    sortArrBy,
    updateCategorySelect
} from '../../redux/reducers/tasksReducer/tasksActionCreators';

const mapStateToProps = state => {
    return {
        sortSelect: state.tasksReducer.sortSelect,
        categorySelect: state.tasksReducer.categorySelect
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateSortSelect: newValue => {
            dispatch(updateSortSelect(newValue))
        },

        sortArrBy: (sortBy) => {
            dispatch(sortArrBy(sortBy))
        },

        updateCategorySelect: newValue => {
            dispatch(updateCategorySelect(newValue))
        }
    }
}

const SortContainer = connect(mapStateToProps, mapDispatchToProps)(Sort)

export default SortContainer