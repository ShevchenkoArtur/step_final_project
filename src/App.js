import React from 'react'
import './App.scss'
import Routes from './components/Routes/Routes';
import MainHeaderContainer from './components/MainHeader/MainHeaderContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <SidebarContainer />

            <div className={`${props.darkTheme ? 'main-content-light' : 'main-content-dark'} main-content`}>
                <MainHeaderContainer />
                <Routes />
            </div>
        </div>
    );
}

export default App
