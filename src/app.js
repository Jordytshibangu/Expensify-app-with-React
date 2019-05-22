
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import {startsetExpenses} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css';
import './styles/style.scss'
import 'react-dates/lib/css/_datepicker.css'
import './firebase/firebase'


const store = configureStore();
console.log('test')
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(<p>Loading ...</p>, document.getElementById('app'))

store.dispatch(startsetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'))
})



