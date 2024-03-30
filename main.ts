import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {message : "select your first number", type : "number", name : "firstNumber"},
    {message : "select your second number", type : "number", name : "secondNumber"},
    {
        message : "select one operator to perform operations",
        type : "list",
        name : "operator",
        choices:["addition","multiplication","subtraction","division"],
    }
])
if (answers.operator ==="addition") {
console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "multiplication"){
console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "subtraction"){
console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "division"){
    console.log (answers.firstNumber / answers.secondNumber);
}
;