const age = 15;
const isOldEnough = age>= 18;


// if old enough tru, then run if statement
if (isOldEnough) {
    console.log('Sarah can start driving');
}
//or do it like this
if (age>= 18) {
    console.log('Sarah can start driving!')
}

//add an else statement
if (age>= 18) {
    console.log('Sarah can start driving!')
}  else {
    //18 minus age
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

//another example
//create a century where this person was born
const birthYear = 1998;
//century variable has to be declared first to be used inside the code block.
let century;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
