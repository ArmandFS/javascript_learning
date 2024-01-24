//tasks
//2 gym teams, Dolphins and Koalas, They compete 3 times, and the winner with the highest average score wins a trophy. 
//task 1. calculate average score for each team, 

//task1
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins)
console.log(scoreKoalas)

//task2
//Compare the team's average scores to determine the winner of the competition, and print to the console:
if (scoreDolphins > scoreKoalas) {
   console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins) {
   console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas) {
   console.log('Its a tie!');
 }
