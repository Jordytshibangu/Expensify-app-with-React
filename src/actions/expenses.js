import {createStore, combineReducers} from 'redux' 
import uuid from 'uuid';
import database from '../firebase/firebase'

/*
=======================================
||                                   ||
||          ADD EXPENSE              ||
||                                   ||
=======================================
*/


export const addExpense = (expense)=>({
    type : 'ADD_EXPENSE',
    expense
})
export const startAddExpense = (expenseData = {}) =>{
    return (dispatch) => {
        const {
            description ='',
            note = '',
            amount = 0,
            createAt = 0
        } = expenseData
        const expense = { description, note, amount, createAt}

        return database.ref('expenses').push(expense).then((ref) =>{
            dispatch(addExpense({
                id : ref.key,
                ...expense
            }))
        })
    }
}


/*
=======================================
||                                   ||
||          REMOVE EXPENSE           ||
||                                   ||
=======================================
*/

export const removeExpense = ({id} = {})=>({
    type : 'REMOVE_EXPENSE',
    id
})







/*
=======================================
||                                   ||
||          EDIT EXPENSE           ||
||                                   ||
=======================================
*/
export const editExpense = (id, updates) =>({
    type : 'EDIT_EXPENSE',
    id,
    updates
})
