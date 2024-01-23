const inputYear = '1991';
//this cannot be added because it is a string, so we have to convert into a number
console.log(Number(inputYear) + 18);

//you also cannot put Number for actualy characters
console.log(Number('Jonas')); //produces NaN

//convert number to string
console.log(String(23));

//type coercion
console.log('I am' + 23 + ' years old');
//another example of type coercion
console.log('23' - '10' - 3); //output is 10


let n = '1' + 1;
n = n - 1;
console.log(n)
// output is 10 because '1' is a string, '1' + 1 is 11, minus 1 becomes 10
