// Interfaces

// Generics

// Enums (maybe)

// boolean, string, number

// explicitly type: arrays, objects, and return types
// can, but don't have to type boolean, strings, and numbers

let mystrin: string = "hello world";
let mynum: number = 3;

let othernum = "cow"; // type inference - you don't have to put the type
let mybool = true;

mynum + 3;

mynum * 3;

mynum + "cow";

othernum + "hello";

function foo(arg1: string, arg2: boolean): number {
  return 34;
}

interface MyObjType {
  a: number;
  b: string;
  c: boolean;
}

let myobj = {
  a: 2,
  b: "cat",
  c: false,
};

// interfaces are for typing objects
interface User {
  name: string;
  age: number;
}

function login(): User {
  return {
    age: 33,
    name: "Kennedy",
  };
}

// Come up with some more examples of generics

function manipulateArray<K>(array: K[]) {
  for (let i = 0; i < array.length; i++) {
    array[i];
  }
}

const array1: string[] = ["cat", "dog", "mouse"];
const array2 = [1, 2, 3];

manipulateArray(array1);
manipulateArray(array2);

var numKids: number = 5;
var partner: string = "David Beckham";
var geolocation: string = "Costa Rica";
var jobTitle = "web developer";

var future =
  "You will be a " +
  jobTitle +
  " in " +
  geolocation +
  ", and married to " +
  partner +
  " with " +
  numKids +
  " kids.";
console.log(future);
