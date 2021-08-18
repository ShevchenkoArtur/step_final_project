import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Today from "./components/Today/Today";
import Inbox from "./components/Inbox/Inbox";

const App = () => {
    return (
        <div>
            <Sidebar />

            <Switch>
                <Route path='/today'>
                    <Today />
                </Route>
                <Route path='/inbox'>
                    <Inbox />
                </Route>
            </Switch>
        </div>
    );
}

export default App
