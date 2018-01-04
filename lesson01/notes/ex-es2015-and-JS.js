// --- bind()
const aVariable = 32;
var Example = {
    aVariable = 81;
    incrementVariable: function() { 
        return this.aVariable + 1; 
    }
};
Example.incrementVariable(); // 82

var unbouncIncrementVariable = Example.incrementVariable;
unboundIncrementVariable(); // results in 33 because in this case, "this" referes oto the global 'aVariable'

// create a new function with 'this' bound to object...
var boundIncrementVariable = Example.incrementVariable.bind(Example);
boundIncrementVariable(); // this will return 82, because boundIncrementVariable.bind(Example) is ensuring we use 'Example' as 'this' when evaluating


// --- const
const apiKey = "abc123";
// this will not work and you will see the error: SyntaxError, variable can not be reassigned
apiKey = "newKey123";
const settings = { dpi: 600 };
// this is allowed because we're not changing 'settings', just a property of 'settings'
settings.dpi = 1200; 

// --- let
// This will work becuase 'let' allows reassignment
let i = 1;
i = 2;
// SyntaxError: Identifier 'i' has already been declared
let i = 1;
let i = 2;

// --- Arrow functions
function product(x,y) {
    return x * y;
}
// becomes ...
const product = (x,y) => { return x * y; }
// leave off the brackets and there is an implicit return statement
const product = (x,y) => 
    x * y;
// but editors don't like it much...

// Converting a function with 'this' to an arrow function
const Example = { 
    x: 81,
    add: function() {
        return this.x + 1;
    }
}
const traditionalResult = Example.add(); // 82

const Example2 = {
    x: 81,
    add: (x) => x + 1
}
const arrowResult = Example2.add(Example2.x); // 82

// --- 'for of' keywords
// common 'for' loop version 1
const numbers = [72, 9, 16, 3];
for(let i = 0; i < numbers.length; i++) {
    // do something with numbers[i]
}
// common 'for' loop version 2
for( let i in numbers ) {
    // do something with numbers[i] here
}
// 'for of'
for( let number of numbers ) {
    // do something with number here
}

// --- es2015 object oriented style streamlining
// the 'constructor' function in the class version is run when you use 'new' to instantiate
// Traditional Version
function Dog(breed) {
    this.breed = breed;
}
Dog.prototype.rollOver = function(times) {
    console.log (`The ${this.breed} rolled over ${times} times.`);
}
const sparky = new Dog("Dachshund");
spary.rollOver(5);

// Class version
class Dog {
    constructor(breed) {
        this.breed = breed;
    }
    rollOver(times) {
        console.log(`The ${this.breed} rolled over ${times}`.);
    }
}
const sparky = new Dog("Dachsund");
sparky.rollOver(5);

// Using expressions to define classes
// Named
const Dog = class Dog { }
// UnNamed 
const Dog = class {  }

// Extending Classes ...
// Traditional prototype version
function BaseClass () { }
BaseClass.prototype.printTitle = function(title) {
    console.log(`Title: ${this.title}`);
}
BaseClass.prototype.setTitle = function(title) {
    this.title = title;
}
function SubClass() {
    this.setTitle("This is the function style SubClass");
}
SubClass.prototype = Object.create(BaseClass.prototype);

const s2 = new SubClass();
s2.printTitle();

// ES2015 version
class BaseClass{
    constructor() {  }
    setTItle(title) { this.title = title; }
    printTitle() { console.log(`Title: ${this.title}`); }
}
class SubClass extends BaseClass() {
    constructor() {
        super(); // this runs the parent classes's constructor function
        this.setTitle("This is the class based SubClass");
    }
}
const s = new SubClass();
s.printTitle();

// --- String Interpolation
// normal
const path = homeDirectory + '/' + base + '/' + file + '.' + extension;
// string interpolation - 
const path = `${homeDirectory}/${base}/${file}.${extension}`;

// --- Import
// this imports the default export of react as 'React'
import React from 'react';
// we can now make use of the functions that are a part of the React NPM package , which we imported as React
React.render(...);

// File 'first.js' - example file to import
export function test(a,b) {
    return `a: ${a}, b: ${b}`
}
// we could import all the functions as 'First
import * as First from './first.js';
// or just the /first' function. If 'first.js' contained both a 'test' and 'test2' function, you could import them specifically
import {test, test2} from './first.js';
test(5, 'hi,);