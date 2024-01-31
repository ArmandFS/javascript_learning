//challenge 5
//Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
//A team only wins if it has at least double the average score of the other team. Otherwise, no team wins

//task 1:
//create an arrow function calcAverage to calculate average of 3 scores. Function has 3 parameters

const calcAverage = (a,b,c) => (a + b + c) / 3;
console.log(calcAverage(3,4,5));

//task 2 
//Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

//task 3
// create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above.
const checkWinner = function (avgDolphins, avgKoalas){
    if (avgDolphins > avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas > avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins..');
  } 

}
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);
//2nd test
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
