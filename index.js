import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);
const answer = await inquirer.prompt([{
        name: "usergussnumber",
        type: "number",
        message: "please gusse a number between 1-6",
    }]);
if (answer.usergussnumber === randomNumber) {
    console.log("congratulation! you gusse a right Number");
}
else {
    console.log("you gusse a rong Number");
}
