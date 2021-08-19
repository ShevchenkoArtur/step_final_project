import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import reportWebVitals from './reportWebVitals'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import AppContainer from './AppContainer';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <React.StrictMode>
               <AppContainer />
            </React.StrictMode>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)

reportWebVitals()
