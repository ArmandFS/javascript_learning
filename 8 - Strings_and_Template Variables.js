const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) +' year old JavaScript teacher!';
console.log(jonas)
//result is I'm Jonas, a 46 year old JavaScript teacher!
//lets try const JonasNew with the dolar sign, same as f-strings in python
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old JavaScript ${job}!`;
console.log(jonasNew);

//string with multiple lines using template strings
console.log(`String
multiple
lines`);