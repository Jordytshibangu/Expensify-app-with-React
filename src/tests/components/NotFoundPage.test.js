import React from 'react'
import { shallow } from 'enzyme'
import NotFoundPage from '../../component/NotFoundPage'

test('should render the Not found ', () =>{
    const wrapper = shallow ( <NotFoundPage />)
    expect(wrapper).toMatchSnapshot()
})