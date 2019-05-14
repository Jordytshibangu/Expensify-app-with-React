import {addExpense, removeExpense, editExpense} from '../../actions/expenses';


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
    const expenseData = {
        description : 'rent',
        note : 'this is just a test ',
        amount : 120,
        createAt: 10000
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type : 'ADD_EXPENSE',
        expense : {
            ...expenseData,
            id : expect.any(String)
        }
    })
})
test('should setup add expense action object with default value', ()=>{
    const action = addExpense({})
    expect(action).toEqual({
        type : 'ADD_EXPENSE',
        expense : {
            id : expect.any(String),
            description :'',
            note :'',
            amount : 0,
            createAt : 0
        }
    })
})