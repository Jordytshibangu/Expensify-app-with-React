import {startAddExpense, addExpense ,removeExpense, editExpense, setExpenses, startsetExpenses} from '../../actions/expenses';
import expenses from '../fixtures/expenses'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../firebase/firebase'


const createMockStore = configureMockStore([thunk])

beforeEach((done) =>{
    const expensesData = {};
    expenses.forEach(({id, description, note, amount, createAt}) =>{
        expensesData[id] = { description, note, amount, createAt}
    })
    database.ref('expenses').set(expensesData).then(() => done());
    
})

test('should setup remove expense action object', ()=>{
    const action = removeExpense({id : '123abcd'});
    expect(action).toEqual({
        type : 'REMOVE_EXPENSE',
        id : '123abcd'
    })
})
test('should setup edit expense action object', () =>{
    const action = editExpense('123', { note: 'New note value' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123',
        updates : {note: 'New note value'}
    })
})
test('should setup add expense action object with provided value', ()=>{
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type : 'ADD_EXPENSE',
        expense : expenses[2]
    })
})

test('should add expense to database and store', (done) =>{
    const store = createMockStore({})
    const expenseData = {
        description: 'soemhting',
        amount : 3000,
        note : 'This is better',
        createAt : 3000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type : 'ADD_EXPENSE',
            expense : {
                id : expect.any(String),
                ...expenseData
            }
        })
        database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot) =>{
            expect(snapshot.val()).toEqual(expenseData)
            done();
        })  
    })
})
test('should add expense to database and store', (done) =>{
    const store = createMockStore({})
    const expenseDefault = {
        description: '',
        amount : 0,
        note : '',
        createAt : 0
    }
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type : 'ADD_EXPENSE',
            expense : {
                id : expect.any(String),
                ...expenseDefault
            }
        })
        database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot) =>{
            expect(snapshot.val()).toEqual(expenseDefault)
            done();
        })  
    })
    
})
test('should set up set expense action object with data ', () =>{
 const action = setExpenses(expenses)
 expect(action).toEqual({
     type: 'SET_EXPENSES',
     expenses
 })
})
test('should fetch the expenses from firbase', (done)=>{
    const store = createMockStore({});
    store.dispatch(startsetExpenses()).then(() =>{
        const actions =  store.getActions()
        expect(actions[0]).toEqual({
            type : 'SET_EXPENSES',
            expenses
        })
        done()
    })
    
})