//functions in JS
function logger(){
    //function buddy:inside it are all code
    console.log('My name is Armand')
}
logger();

//let's make more functions
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const fruit_juice = fruitProcessor(5, 6);
console.log(fruit_juice)
//we can also write it like this:
console.log(fruitProcessor(5,0));
