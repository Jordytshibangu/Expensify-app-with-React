import React from 'react'
import { shallow } from 'enzyme'
import ExpenseDashboardPage from '../../component/DashboardPage'

test('should render the expense list filter and the expense list ', () =>{
    const wrapper = shallow ( <ExpenseDashboardPage />)
    expect(wrapper).toMatchSnapshot()
})