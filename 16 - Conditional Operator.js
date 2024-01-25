//a conditional operator works similarly as a if else.
const age = 23;
//after q mark
//age >= 18 ? console.log('I like to drink win') : console.log('I like to drink milk') 
//different syntax
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink)


//works the same thing as the conditional operator
let drink2;
if(age >= 18) {
  drink2 = 'wine';
} else {
  drink2 = 'water';
}
console.log(drink2)

//template literal example
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)