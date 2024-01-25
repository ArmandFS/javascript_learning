//challenge 4 tasks
//Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

//task 1: calculcate the tip, depending on the bill value. Create variable tip for this, no if-else allowed. use ternary operator
//logic: if 30 < bill < 300 = tip 15%, else tip 20%

const bill = 275;

//if else way
let tip1;
if (30 <=bill<=300) {
    tip1 = bill * 0.15;
} else {
    tip1 = bill * 0.2;
}
console.log(tip1)

//ternary way
let tip2 = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(tip2)


//task 2. console log bill, tip, and final bill + tip in a string
console.log(`The bill is ${bill}, the tip is ${tip2}, and the final bill is ${bill + tip2}!`)