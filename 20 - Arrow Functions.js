
//arrow function
birthYear => 2037 - birthYear;

//store it in a variable
//all of that is a value that is stored in a variable
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991)

//complex example with multiple parameters
const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2039 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

//run the function
console.log(yearUntilRetirement(1990, 'Jonas'));
