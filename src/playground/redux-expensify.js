import {createStore, combineReducers} from 'redux' 
import uuid from 'uuid';

//ADD EXPENSE 
const addExpense = (
    {
        description ='',
        note = '',
        amount = 0,
        createAt = 0
    } = {}
    )=>({
    type : 'ADD_EXPENSE',
    expense : {
        id : uuid(),
        description,
        note,
        amount, 
        createAt
    }
})
// REMOVE EXPENSE
const removeExpense = ({id} = {})=>({
    type : 'REMOVE_EXPENSE',
    id
})
//EDIT EXPENSE
const editExpense = (id, updates) =>({
    type : 'EDIT_EXPENSE',
    id,
    updates
})
//SET TEXT FILTER
const setTextFilter = (text = '') =>({
    type : 'SET_TEXT_FILTER',
    text
})
//SORT BY DATE
const sortByDate = () => ({
    type : 'SORT_BY_DATE',
})
//SORT BY AMOUNT
const sortByAmount = () => ({
    type : 'SORT_BY_AMOUNT',
})
//SET START DATE
const setStartDate = (startDate)=>({
    type : 'START_DATE',
    startDate
})
//SET END DATE
const setEndtDate = (endDate)=>({
    type : 'END_DATE',
    endDate
})


// Expenses reducers 
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
           return [
               ...state,
               action.expense
                ];
        case 'REMOVE_EXPENSE' : 
             return    state.filter(({id}) => id !== action.id)      
        case 'EDIT_EXPENSE' : 
            return state.map((expense) =>{
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else {
                    return expense;
                }
            })       
        default : 
        return state;
    }
};

//Filters reducers 
const filtersReducerDefault = {
    text : '',
    sortBy : 'date',
    startDate : undefined,
    endDate : undefined
}
const filtersReducer = (state = filtersReducerDefault, action) =>{
    switch(action.type){
        case 'SET_TEXT_FILTER' : 
            return {
                 ...state,
                 text: action.text
                 }
        case 'SORT_BY_DATE' : 
             return {
                     ...state,
                     sortBy : 'amount'
                 }  
        case 'SORT_BY_AMOUNT' : 
            return {
                ...state,
                sortBy : 'amount'
            }
        case 'START_DATE' : 
            return {
                ...state,
                startDate : action.startDate
             }

        case 'END_DATE' : 
            return {
                ...state,
                endDate : action.endDate
             }
        default :
        return state;
    }
}

//Get visible expenses

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) =>{
    return expenses.filter((expense) =>{
        const startDateMacth = typeof startDate !== 'number' || expense.createAt >= startDate;
        const endDateMatch = typeof endDate !=='number' || expense.createAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMacth && endDateMatch && textMatch;
    }).sort((a, b)=>{
        if(sortBy === 'date'){
            return a.createAt > b.createAt ? 1 : -1;
        } else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }

    })
}

// store creation

const store = createStore(combineReducers({
    expenses : expensesReducer,
    filters : filtersReducer
})
);
store.subscribe(()=>{
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({description : 'Renter', amount : 100, createAt : -5000}))
const expenseTwo = store.dispatch(addExpense({description : 'cofee', amount : 300, createAt : 1000}))
const expenseThree = store.dispatch(addExpense({description : 'tizane', amount : 343, createAt : 1100}))

store.dispatch(removeExpense({id : expenseTwo.expense.id}))
//store.dispatch(editExpense(expenseOne.expense.id,{ amount : 5000} ))

//store.dispatch(setTextFilter(''))

//store.dispatch(sortByAmount()); //amount
 store.dispatch(sortByDate()); //date

// store.dispatch(setStartDate(0));
// // store.dispatch(setStartDate())
//  store.dispatch(setEndtDate(0));


const demoState = {
    expenses : [{
        id : 'poiuyyuio',
        description : 'January Rent',
        note : 'This was the final payment for that address',
        amount : 54500,
        createAt : 0
    }],

    filters : {
        text : 'rent',
        sortBy : 'amount', //date or amount 
        startDate : undefined,
        endDate : undefined
    }
};

const user = {
    name : 'jordy',
    age : 22
};
// console.log({
//     ...user, 
//     location : 'cape town ',
//     age : 21
// })
