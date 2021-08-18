import React from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.scss'
import Sidebar from './components/Sidebar/Sidebar'
import TodayContainer from './components/Today/TodayContainer'
import InboxContainer from './components/Inbox/InboxContainer';

const App = () => {
    return (
        <div className='main-container'>
            <Sidebar/>
            <div>
                header <span className="icon-bin"></span>
                <Switch>
                    <Route exact path='/'>
                        <TodayContainer/>
                    </Route>
                    <Route path='/inbox'>
                        <InboxContainer/>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default App
