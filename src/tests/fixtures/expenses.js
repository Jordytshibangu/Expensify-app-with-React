import moment from 'moment'

export default  [{
    id : '1a',
    description : 'i made it',
    note : 'my note',
    amount : 1000, 
    createAt : moment(0).add(1,'days').valueOf()
},
{   id : '2b',
    description : 'txt',
    note : 'your note',
    amount : 100, 
    createAt : moment(0).subtract(4,'days').valueOf()
},{
    id : '3c',
    description : 'text',
    note : 'your note',
    amount : 0, 
    createAt : moment(0).add(4,'days').valueOf()
}]