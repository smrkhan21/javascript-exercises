// this keyword in js (implicit binding)
// Question 1 : what is output
// const user = {
//     firstName : "Khan!",
//     getName() {
//         const firstName = "Sameer22!";
//         return this.firstName;
//     }
// }

// console.log(user.getName()); // what is logged



// Question 2

// console.log(this === window);



// Question 3

// var person = {
//     name: "John",
//     sayHi: function() {
//       console.log("Hi, my name is " + this.name);
//     }
//   };
  
//   var greet = person.sayHi;
//   console.log(greet);


// var person = {
//   name: "John",
//   sayHi: function() {
//     // const a = () => (`Hi ${this.name}`)
//     // console.log(a());
//     console.log(this);
//   }
// };

// var greet = person.sayHi();
// console.log(greet);


// var person = {
//   name: "John",
//   bcone:true,
//   sayHi: function() {
//     console.log("Hi, my name is " + this.name);
//   }
// };

// var greet = person.sayHi;
// greet();

// var obj = {
//   data: "outer",
//   getData: function() {
//     return () => {
//       console.log(this.data);
//     };
//   }
// };

// var innerFunction = obj.getData();
// innerFunction();



// function Dog(name) {
//   this.name = name;
// }

// var dog = Dog("Buddy");
// console.log(dog.name);

var button = document.getElementById("myButton");
button.addEventListener("click", function() {
  console.log(this.textContent);
});