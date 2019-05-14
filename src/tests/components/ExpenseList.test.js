import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseList } from '../../component/ExpenseList'
import expenses from '../fixtures/expenses'

test('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot()  
})
test('shoukd render expense list with empty message' , () =>{
    const wrapper = shallow(<ExpenseList expenses={[]}/>)
    expect(wrapper).toMatchSnapshot()  
})