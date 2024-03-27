#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number - Done
// 2) User input for guessing number - Done
// 3) compare user input with computer generated number and show result - Done
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to number guessing game");
const answer = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6:  ",
    },
]);
if (answer.UserGuessedNumber === randomNumber) {
    console.log("Congratulation! you guessed right numbe. ");
}
else {
    console.log("You Guessd wrong number");
}
