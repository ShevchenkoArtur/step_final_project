import {connect} from 'react-redux';
import MainHeader from './MainHeader';
import {switchDarkTheme} from '../../redux/reducers/themeReducer/themeActionCreators';

const mapStateToProps = state => {
    return {}
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