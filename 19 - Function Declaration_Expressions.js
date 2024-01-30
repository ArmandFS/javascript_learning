//function declaration example
//put the input as parameter
//calculate age and return
function calcAge1 (birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1999);


//function expression example
//a function without a name, an anonymous function
const calcAge2 = function (birthYear2) {
    return 2037 - birthYear2
}

const age2 = calcAge2(1990)
