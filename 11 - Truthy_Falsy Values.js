//5 falsy values
// 0, ' ' ,undefined, null, NaN
console.log(Boolean(0)); //results in falsy value
console.log(Boolean(undefined)); //false
console.log(Boolean('Armand')); // true
console.log(Boolean({})); // true

//type coercion example in if else
const money = 0;
if(money) {
    console.log("Don't spend it all!");
} else {
    console.log("You should get a job!");
}
//output is else, because 0 is a falsy value, and money = 0 is converted into a boolean value

//this example will convert a number to a truthy value and select if
const money2 = 100;
if(money2) {
    console.log("Don't spend it all!");
} else {
    console.log("You should get a job!");
}

//next example
let height;
if (height) {
    console.log('Height is defined');
} else {
    console,log("height is undefined")
}
//output is false and selects else:
