const massMark = 80;
const heightMark = 1.8;
const massJohn = 75;
const heightJohn = 1.85;


let BMIMark = massMark /(heightMark)**2;
let BMIJohn = massJohn /(heightJohn)**2;

console.log(BMIMark);
console.log(BMIJohn);

//bonus objective
let markHigherBMI = (BMIMark > BMIJohn);
console.log(markHigherBMI);