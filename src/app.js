
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import {addExpense, removeExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css';
import './styles/style.scss'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore();

store.dispatch(addExpense({description : 'water bill', amount : 450, createAt : 456,}))
store.dispatch(addExpense({description : 'something else outta', amount : 234, createAt : 453}))
store.dispatch(setTextFilter('a'))



const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'))
