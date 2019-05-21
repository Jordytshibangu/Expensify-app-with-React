const promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve('this is my resolved data')
    }, 4000)
    
})
console.log('before')
promise.then((data) => {
    console.log('1',data)
})
promise.then((data) => {
    console.log('2',data)
})

console.log('after')