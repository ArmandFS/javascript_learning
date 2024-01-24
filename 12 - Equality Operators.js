const age = 18;
//loose equality
if (age == 18) console.log("You just became an adult.");
//strict equality
if (age === 18) console.log("You just became an adult.");

//more examples
18 === 18
//is true
18 === 19
//is false
'18' == 18
//is true
const favourite = prompt("What's your favourite number?"); //not available on nodejs, but on web
console.log(favourite);

//using strict would not output anything because favourite is a string, and not a number
if (favourite === 23) {
    console.log('Cool, 23 is nice!')
}

//using loose will output the console log
if (favourite == 23) {
    console.log('Cool, 23 is nice!')
}

//else if code block example
if (favourite === 23) {
    console.log('Cool, 23 is nice!')
} else if (favourite === 7) {
    console.log('7 is also a cool number')
}
//not equal example
 
if(favourite !== 23) console.log('Why not 23?');
