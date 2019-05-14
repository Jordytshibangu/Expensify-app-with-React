//=====Object destructuring ============================

const person = {
    name ,
    age : 22,
    location : {
        city : 'cape town ',
        temp : 15
    }
}

const {name = 'anonymous', age} = person
console.log(`hello i m ${name} and i am ${age}`)

const {city, temp : temperature} = person.location
console.log(`I live in ${city} and it's ${temperature} degree`)

const book = {
    title : 'Ego is the enemy',
    author : 'RYAN H',
    publisher : {
        name : 'Penguin'
    }
}

const  { name : publisherName = 'Unknown' } = book.publisher

console.log(publisherName)

//=====Array destructuring ===============================

const address = ['9 S Retief', 'Cape Town','Western cape','7530']



const [street,citi, state, zip] = address;

console.log(`You are in ${city} in ${state}`)

const items = ['coffee(hot)','$2.oo','$2.5o','$2.75']

const [coffee,,,price3] = items
console.log(`A medium ${coffee} costs ${price3}`)