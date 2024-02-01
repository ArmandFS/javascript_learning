//array is mutable and can be changed even if it is a const
//array example (THE common method, and literal syntax)
const friends = ['Michael', 'Steven', 'Peter'];

//we can also write and specify an array like this
const year = new Array(1991, 1984, 2008, 2020);

//getting out values from an array (indexing)
console.log(friends[0]); //index 1 starts from 0
console.log(friends[2]); //index number 3

console.log(friends.length); //find length of array
console.log(friends[friends.length-1]) //find last value in array


//add elements to array
//adds 'Jay' into element 2 and replaces Peter
friends[2] = 'Jay';
//what we cannot do is change every element in the array

//more array examples
//you can put arrays inside arrays
const firstName = 'Jonas';
const jonas=[firstName, 'Schmedtmann', 2037-1991, 'teacher', friends]

//array exercises
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);
