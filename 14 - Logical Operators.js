const hasDriversLicense = true; //A
const hasGoodVision = false; //B

console.log(hasDriversLicense && hasGoodVision) //results in false
console.log(hasDriversLicense || hasGoodVision) //results in true
console.log(!hasDriversLicense) //results in false

const shouldDrive = hasDriversLicense && hasGoodVision;

if(shouldDrive) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else should drive.')
}

//this results in the else output
//also its better to write it like this below:
if (hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive');
}

//another example
const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired);
