//operators in javascript
//let's get this over with

const year = 2037;
const ageJonas = year - 1991;
const ageSarah = year - 2018;
console.log(ageJonas, ageSarah)

//trying out multiply and divide
console.log(ageJonas * 2, ageJonas / 10,   2 ** 3,  4/2)

//concatenate 2 variables
//we can do this with '+' on strings
const firstName = 'Armand';
const lastName = 'Faris';
console.log(firstName + ' ' + lastName);

//assignment operators
//we can also use let 
let x = 10 + 5;
console.log(x);
//increment usage, below is the same as x = x + 10
x+= 10;
x *= 4;
console.log(x);
x ++;
//this is the same as x = x + 1

//comparison operators
console.log(ageJonas > ageSarah);
console.log(ageJonas < ageSarah);
console.log(ageJonas = ageSarah);
console.log(ageSarah >= 18);
console.log(ageSarah <= 18);
