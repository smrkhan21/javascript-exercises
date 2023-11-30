// Spread Operator In Js
// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
// It mergers two array and objects into single array

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// const res = [...arr1, ...arr2];
// console.log(res);

// Spread Operator in Objects

// const obj1 = {
//     firstName: "Sameer",
//     lastName: "Khan"
// }

// const obj2 = {
//     age: "25",
//     contact: "9169510138"
// }

// const resObj = {...obj1, ...obj2}

// console.log(resObj);


const originalArray = [1, [2, 3], 4];
const deepCloneArray = [...originalArray]; // This creates a shallow clone, so nested arrays/objects are not deeply cloned
console.log(deepCloneArray);