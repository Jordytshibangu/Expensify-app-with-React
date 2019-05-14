import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should default expenses value', ()=>{
    const state = expensesReducer(undefined, {type : '@@INIT'})
    expect(state).toEqual([])
})
test('should setup the remove expense by id', () =>{
    const action = {
        type : 'REMOVE_EXPENSE',
        id : expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
    
})
test('should not setup the remove expense if id not found', () =>{
    const action = {
        type : 'REMOVE_EXPENSE',
        id : '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
    
})
test('should setup the add expense', ()=>{
    const expense = {
            id : '4',
            description : 'this is something new ',
            note : '',
            amount : 1000, 
            createAt : moment(0).valueOf()
    }
    const action = {
            type : 'ADD_EXPENSE',
            expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})
test('should edit an expense', () =>{
    const amount = 1220202;
    const action = {
        type : 'EDIT_EXPENSE',
        id : expenses[0].id,
        updates : {amount}   
    } 
    const state = expensesReducer(expenses, action)
    expect(state[0].amount).toBe(amount)
})
test('should not  edit an expense if id is not found', () =>{
    const amount = 1220202;
    const action = {
        type : 'EDIT_EXPENSE',
        id : '-1',
        updates : {amount}   
    } 
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})
