// function as variable
function sayHi2(x) {
    console.log(x * x)
}
sayHi2(2)

let sayHi = (yourname) => {
    console.log('hi ' + yourname)
}
sayHi('mike')

// arrow functions (ES5)
let sayHi3 = () => {
    console.log('hola')
}
sayHi3()

let sayHi3WithName = (yourName) => {
    console.log(`Hallo ${yourName}`)
}
sayHi3WithName(`Batman`)

let square2 = (x) => {
    console.log(x * x)
}
square2(5)


//Surface1
//Declaration Notations
function surface1(w, l) {
    console.log(w * l)
}
surface1(5, 10)

//Surface2
// Function as Variable
let surface2 = function (w, l) {
    console.log(w * l)
}
surface2(4, 10)

//Surface3
//Arrow Function

let surface3 = (w, l) => {
    console.log(w * l)
}
surface3(4, 10)

//return
//give something back
//end the block

function trySomething(param1) {
    return param1
}

let result = trySomething('test')
console.log(result)

let function1 = () => {
    return 'my'
}
let function2 = () => {
    return 'Name is'
}

let mainFunction = (username) => {
    let text1 = function1()
    let text2 = function2()
    // return username;
    console.log(text1 + text2 + username)
}
mainFunction('Mickey')

const counterElt = document.getElementById('counter')
let index = 0
let conter = () => {
    if (index == 5) {
        return;
    }
    index = index + 1
    index = index + 1
    counterElt.innerHTML = index
}

//Hoisting
//Behaviour of using variable or function before Declaration
//Varibale: var // let and const are not hoisted 


num1 = 10
console.log(num1)
var num1

sayHello()
function sayHello() {
    console.log('hello')
}


// scope in javascript
// global scope in
// local scope
console.log('we are on the global scope')

function fool() {
    console.log('we are on the local scope of the function fool')
    console.log('fool')
    function foo2() {
        console.log('we re on the local scope of the function foo2')
        console.log('foo2')
    }
    foo2()
}
fool()
//foo2() : ReferenceError(only local inside a function)
function foo3() {
    console.log('foo3')
}

//local scope: function scope und block scope
switch (true) {
    case true:
        console.log('local scope1')
        console.log('block scope1')
        break;
}

//let: block scoped
//const: block scoped
// var: function scoped

let fizz = 'outside'
console.log(fizz);
if (true) {

}

console.log('---')
const fizz2 = 'outside'
console.log(fizz2)
if (true) {
    const fizz2 = 'inside'
    console.log(fizz2)
}
console.log('====')
var fizz3 = 'ourside'
console.log(fizz3)
if (true) {
    var fizz3 = 'inside'
    console.log(fizz3)
}
console.log(fizz3)

var fruit = 'apple'
console.log(fruit)

function fruits() {
    var fruit = 'orange'
    console.log(fruit) // orange
    if (true) {
        var fruit = 'banana'
        console.log(fruit) // banana
    }
    console.log(fruit) // banana
}

fruits()
console.log(fruit) // apple

// let vegetable = 'potato'
// console.log(vegetable)

function vegetable() {
    let vegetable = 'tomato'
    console.log(vegetable)
}

vegetable()
console.log(vegetable)
