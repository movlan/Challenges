function migratoryBirds(arr) {

  // THIRD TRY 
  //  I missed that types can only be 1,2,3,4,5
  // I will try first approach again with some modification
  const types = {}

  // loop trough arr
  for (let i = 0; i < arr.length; i++) {
    // we create one with initial value 1
    if (!types[arr[i]]) {
      types[arr[i]] = 1
    } else {
      // if types[i] exists we add one to it
      types[arr[i]]++
    }
  }
  // create high variable
  let highType = 0;
  let high = 0
  
  // we can use for loop because we know that there is only 5 types
  for (let i = 1; i < 6; i++) {
    if (types[i] > high) {
      high = types[i] 
      highType = i
    }
  }

  return highType

/*   SECOND TRY */ // DIDNT WORK FAST ENOUGH
// let highType;
//   let highCount = 0

//   for (let i = 0; i < arr.length; i++) {
//     let count = 0
//     for(let j = i+1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         count++
//       }
//     }

    
//     if (highCount < count) {
//       highType = arr[i]
//     }

//     if (highCount = count) {
//       highType = highType > arr[i] ? arr[i] : highType
//     }
//   }

//   return highType


  /* FIRST TRY */ // DIDNT WORK BECAUSE HackerRank gives an error for for/of or for/in loop on object
/*  // create birds object to count birds of each type
  const birds = {}

  // loop trough arr
  for (let i = 0; i < arr.length; i++) {
    // we create one with initial value 1
    if (!birds[arr[i]]) {
      birds[arr[i]] = 1
    } else {
      // if birds[i] exists we add one to it
      birds[arr[i]]++
    }
  }

  console.log(birds)
  // create 
  let high = 0

  for (const key of birds) {  // <--- HackerRank gives an error for for/of or for/in loop on object 
    if (high < birds[key]) {
      high = key
    }
  }
  
  // return high 
  return high */
  
  /* previous didnt work lets try something else */
  
  
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3, 3, 3]))