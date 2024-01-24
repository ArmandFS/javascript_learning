//AND operator example
let x = 5;
let y = 10;
if (x > 0 && y > 0) {
    console.log("Both x and y are greater than 0");
} else {
    console.log("At least one of x or y is not greater than 0");
}

//Example 2
let isSunShining = true;
let isWarm = true;
if (isSunShining && isWarm) {
    console.log("It's a sunny and warm day!");
} else {
    console.log("It's not sunny and warm.");
}

//OR operator example
// Example 1
let age = 25;
if (age < 18 || age >= 60) {
    console.log("You are either below 18 or 60 and above.");
} else {
    console.log("You are between 18 and 60.");
}

// Example 2
let isRaining = true;
let hasUmbrella = false;
if (isRaining || hasUmbrella) {
    console.log("You won't get wet!");
} else {
    console.log("You might get wet.");
}

//NOT Operator example
let isOpen = false;
if (!isOpen) {
    console.log("The shop is closed.");
} else {
    console.log("The shop is open.");
}

// Example 2
let hasPermission = true;
if (!hasPermission) {
    console.log("You don't have permission to access this resource.");
} else {
    console.log("You have permission to access this resource.");
}
