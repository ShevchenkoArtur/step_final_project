import {connect} from 'react-redux';
import Sort from './Sort';
import {
    updateSortSelect,
    sortArrBy,
} from '../../redux/reducers/tasksReducer/tasksActionCreators';

const mapStateToProps = state => {
    return {
        sortSelect: state.tasksReducer.sortSelect,
        darkTheme: state.themeReducer.darkTheme
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
    }
}

const SortContainer = connect(mapStateToProps, mapDispatchToProps)(Sort)

export default SortContainer