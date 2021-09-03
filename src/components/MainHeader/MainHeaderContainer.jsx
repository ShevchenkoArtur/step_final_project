import {connect} from 'react-redux';
import MainHeader from './MainHeader';
import {switchDarkTheme} from '../../redux/reducers/themeReducer/themeActionCreators';

const mapStateToProps = state => {
    return {
        darkTheme: state.themeReducer.darkTheme
    }
}

const mapDispatchToProps = dispatch => {
    return {
        switchDarkTheme: () => {
            dispatch(switchDarkTheme())
        }
    }
}

const MainHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(MainHeader)

export default MainHeaderContainer