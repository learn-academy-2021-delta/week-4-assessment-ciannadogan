// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe('shuffleColors', ()=>{
    it('returns an array without first item and shuffled', ()=>{
      expect(shuffleColors(colors1)).toEqual(["yellow", "blue", "pink", "green"])
      expect(shuffleColors(colors2)).toEqual(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"])
    })
  })

// Got red

// b) Create the function that makes the test pass.

// create a function that takes in an array as an arguement
// iterate with for loop
// remove the first item in the array .shift()
// randomize the array with Math.random() multiplied by index

// I think I had this one, I just couldn't get my syntax down

const shuffleColors = (array) => {
    let newArr = []
//     for (let i=0; i=array.length - 1; i--){
//         console.log(shuffleColors.shift()(newArr(Math.random() * i)))
//     }
    console.log((shuffleColors.shift())(newArr(Math.random)))
}


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

describe('minToMax', (array)=>{
    it('determines which numbers are maximum and minimum', ()=>{
      expect(minToMax(nums1)).toEqual([-8, 90])
      expect(minToMax(nums2)).toEqual([5, 109])
    })
  })

// Got red

// b) Create the function that makes the test pass.

// create a function that takes in an array as an arguement
// iterates through array using for loop
// returns new array of only the minimum and maximum numbers in the array.

const minToMax = (array) => {
    let newArr = []
    for(let i=0; i<array.length; i++){
        newArr.push(Math.max(...array))
        newArr.push(Math.min(...array))
    return newArr.sort((a, b) => a - b)
    }
}

//Passed

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe('concatArr', ()=>{
    it('returns an array with no duplicate values', ()=>{
      expect(concatArr(testArray1)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
      expect(concatArr(testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
  })



// b) Create the function that makes the test pass.

// create a function that takes in two arrays as arguements
// .concat() the array to create one
// use conditional to determine which values are the same
// return a new array with no duplicate values

// I think I got stumped here also on my syntax, but if I managed my time better I would have solved it

// const concatArr = (array, array) => {
//     let newArr = []
//     if (concatArr.concat() = ...)
//         return newArr
//     else 
//         return concatArr
// }