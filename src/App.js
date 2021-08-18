import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import TodayContainer from './components/Today/TodayContainer'
import InboxContainer from './components/Inbox/InboxContainer';

const App = () => {
    return (
        <div>
            <Sidebar />

            <Switch>
                <Route path='/today'>
                    <TodayContainer />
                </Route>
                <Route path='/inbox'>
                    <InboxContainer />
                </Route>
            </Switch>
        </div>
    );
}

export default App
