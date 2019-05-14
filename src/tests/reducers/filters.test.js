import filtersReducer from '../../reducers/filters';

import moment from 'moment'

test('should setup default filter value ', ()=>{
    const state = filtersReducer(undefined, { type : '@@INIT'});
    expect(state).toEqual({
        text : '',
        sortBy : 'date',
        startDate : moment().startOf('month'),
        endDate : moment().endOf('month')
    })
})
test('should set sortBy to amount ', () =>{
    const state = filtersReducer(undefined,{ type : 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');

})
test('should setup sortBy date', ()=>{
    const currentState = {
        text : '',
        sortBy : 'amount',
        startDate : undefined,
        endDate : undefined
    }
    const action = {type :'SORT_BY_DATE'}
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date')
})
test('should setup text filter', ()=>{
    const text = 'this is my filter'
    const action = {
        type : 'SET_TEXT_FILTER',
        text 
    }
    const state = filtersReducer(undefined, action)
    expect(state.text).toBe(text)
})
test('should set startDate filter ', ()=>{
    const action ={
        type : 'START_DATE' ,
        startDate : moment(0).valueOf()
    }
    const state = filtersReducer(undefined, action)
    expect(state.startDate).toBe(0)
})
test('should set startDate filter ', ()=>{
    const action ={
        type : 'END_DATE' ,
        endDate : moment(0).valueOf()
    }
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toBe(0)
})