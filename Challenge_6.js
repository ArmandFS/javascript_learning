//Steven wants to improve tip calculator, using the same rules as before:
//the rules: tip 15% if bill is 50<x<300 if value is different, tip is 20%


//Task 1: Create calcTip function that takes any bill value as an input and returns the corresponding tip, Test the function using a bill value of 100
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;}

calcTip(100);


//Task 2: Create an array caled bills containing test data below:
//bills array with test data
const bills = [125, 555, 44];

//task 3: create a tips array containing the tip value of all
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips)


//bonus create an array totals, containing total values of bill + tip
//you can count it by the element of array
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
