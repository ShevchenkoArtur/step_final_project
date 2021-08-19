import React from 'react';
import {Route, Switch} from 'react-router-dom';
import TodayContainer from '../Today/TodayContainer';
import InboxContainer from '../Inbox/InboxContainer';
import ArchiveContainer from '../Archive/ArchiveContainer';
import BinContainer from '../Bin/BinContainer';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <TodayContainer/>
            </Route>
            <Route path='/inbox'>
                <InboxContainer/>
            </Route>
            <Route path='/archive'>
                <ArchiveContainer/>
            </Route>
            <Route path='/bin'>
                <BinContainer/>
            </Route>
        </Switch>
    );
};

export default Routes;