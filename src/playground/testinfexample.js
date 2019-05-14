const add = (a,b) => a + b ;
const generateGreeting = (name = 'anonymous') => `Hello ${name}!`

test ('should add two number ',() =>{
    const result = add(3,4);
    expect(result).toBe(7)

    // if(result !== 7){
    //     throw new Error(`You added 4 and 3, the result was ${result} instead of 7`)
    // }
});

test ('should greet the name', () =>{
    const greeting = generateGreeting('mike')
    expect(greeting).toBe('Hello mike!')
})

test('should generate greeting for no name' , ()=>{
    const greeting = generateGreeting();
    expect(greeting).toBe('Hello anonymous!')
})