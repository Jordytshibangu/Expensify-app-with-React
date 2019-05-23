import moment from 'moment'

//Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) =>{
    return expenses.filter((expense) =>{
        const createAtMoment = moment(expense.createAt)
        const startDateMacth = startDate ? startDate.isSameOrBefore(createAtMoment, 'day'): true
        const endDateMatch = endDate ?  endDate.isSameOrAfter(createAtMoment, 'day') : true
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
export default getVisibleExpenses;