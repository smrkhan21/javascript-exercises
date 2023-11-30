const original = { a: 1, nested: { b: 2 } };

// Shallow copy using Object.assign()
const shallowCopy = original;

shallowCopy.nested.b = 3; // This will affect both shallowCopy and original

console.log(original);      // Output: { a: 1, nested: { b: 3 } }
console.log(shallowCopy);   // Output: { a: 1, nested: { b: 3 } }

const clonedObject = JSON.parse(JSON.stringify(original));
clonedObject.nested.b = 19;
console.log(clonedObject); 


