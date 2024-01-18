const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);
console.log ( 25 - 10 - 5);

//right to left assignment precedence
let x, y;
x = y = 25-10-5;
console.log(x, y)

//grouping operator examples
//operation in parentheses go first.
const averageAge = (ageJonas + ageSarah) / 2
console.log(averageAge)