// It is a response to an action, much like a reaction. but it is a little different in js

// var list = [1, 2, 3, 4, 5];

// list. forEach(funciton(x){
// 	console.log(x);
// });

// //Take in a list, and a callback function
// // Loop over the list from start to finish
// // take each element of the list and pass it
// // to the callback function

// function myForEach(list, cb) {
//     for(var i = 0; i < list.length; i++){
// 	cb(list[i], i, list);
//     }
// }

// myForEach(list, function(x, idx)){
//     console.log("The " + idx + " th element is " + x);
// }

// ANother example leading up to the callbacks.
var myFn = function() {
  console.log("I am function.");
}

myFn.someAttribute = 42;
console.log(myFn.someAttribute);

function runner(f) {
  f();
}

runner(myFn);