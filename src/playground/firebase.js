


  
//   //child_removed
//   database.ref('expenses').on('child_removed', (snapshot) =>{
//       console.log(snapshot.key, snapshot.val());
//   })
//   database.ref('expenses').on('child_changed', (snapshot) =>{
//       console.log(snapshot.key, snapshot.val())
//   })
//   database.ref('expenses').on('child_added', (snapshot) =>{
//     console.log(snapshot.key, snapshot.val())
// })
//   database.ref('expenses')
//   .on('value', (snapshot) => {
//       const expenses = []

//       snapshot.forEach((childSnapshot) =>{
//           expenses.push({
//               id : childSnapshot.key,
//               ...childSnapshot.val()
//           })
//       })
//       console.log(expenses)
//   })


// database.ref('expenses').push({
//     description : 'computer 4',
//     note : 'this is the fourth computer',
//     amount : 2424,
//     createdAt : 15
// })
// database.ref('expenses').push({
//     description : 'computer 2',
//     note : 'this is the second computer',
//     amount : 1212,
//     createdAt : 13
// })
// database.ref('expenses').push({
//     description : 'computer 3',
//     note : 'this is the third computer',
//     amount : 1414,
//     createdAt : 14
// })


//     database.ref().set({
//       name : 'jordy Tshibss',
//       age : 21,
//       stressLevel : 6,
//       job : {
//           title : 'software developer',
//           comapny : 'Google'
//       },
//       isSingle : false,
//       location : {
//           city : 'Philadelphia',
//           country : 'United state'
//       }
//   }).then(() => {
//       console.log('Data is saved')
//   }).catch((e) =>{
//       console.log('this failed',e)
//   })
//   database.ref('age').set(22)
//   database.ref('location/city').set('Joburg')



//   database.ref('attributes').set({
//       height : '180 cm',
//       weight : '77 kg'
//   }).then(() => {
//       console.log('this works')
//   }).catch((e) =>{
//       console.log('error', e)
//   })
  
//==== Remove data from the database ==============

// database.ref('isSingle').remove().then(() =>{
//     console.log('user removed')
// }).catch((e) =>{
//     console.log('Error while removing user ', e)
// })

//==== Update date to the database ===============

// database.ref().update({  
//     stressLevel : 9,
//     'job/company' : 'Amazon',
//     'location/city' : 'Seattle'
// }).then(() => {
//     console.log('this works')
// }).catch((e) =>{
//     console.log('error', e)
// })

//=== Fetch data from the database ==============

// FIRST METHOD

    // database.ref('location')
    // .once('value')
    // .then((snapshot) =>{
    // const val = snapshot.val()
    // console.log(val)
    // })
    // .catch((e) =>{
    // console.log('Error fetching data', e)
    // })
// SECOND METHOD

// const onValueChange  = database.ref().on('value', (snapshot) =>{
//         console.log(snapshot.val())
//     }, (e) =>{
//         console.log('Error with data fetching',e)
//     })
//     setTimeout(() =>{ 
//         database.ref('age').set(23)
//     }, 2000)
//     setTimeout(() =>{
//         database.ref().off(onValueChange)
//     }, 4500)
//     setTimeout(() =>{ 
//         database.ref('age').set(24)
//     }, 8000)

// database.ref().on('value', (snapshot) =>{
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })