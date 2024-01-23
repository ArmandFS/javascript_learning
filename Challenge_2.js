//previous code from challenge 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);



//challenge 2 
// 1. print a nice output to the console, telling the user who has higher BMI message can be:
// "Mark's BMI is higher than John's!"
console.log("Mark's BMI is higher than John's!")

//2. Modify the output above to use template literals
// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".
console.log(`Mar's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
