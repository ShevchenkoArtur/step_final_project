import React from 'react';
import {Route, Switch} from 'react-router-dom';
import TodayContainer from '../Today/TodayContainer';
import InboxContainer from '../Inbox/InboxContainer';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <TodayContainer/>
            </Route>
            <Route path='/inbox'>
                <InboxContainer/>
            </Route>
        </Switch>
    );
};

export default Routes;