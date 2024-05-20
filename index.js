#! /usr/bin/npm login
import inquirer from "inquirer";
const asnwer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter secand number", type: "number", name: "secandNumber" },
    {
        message: "select one of the operators to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
/////conditional statement
if (asnwer.operator === "Addition") {
    console.log(asnwer.firstNumber + asnwer.secandNumber);
}
else if (asnwer.operator === "Subtraction") {
    console.log(asnwer.firstNumber - asnwer.secandNumber);
}
else if (asnwer.operator === "Multiplication") {
    console.log(asnwer.firstNumber * asnwer.secandNumber);
}
else if (asnwer.operator === "Division") {
    console.log(asnwer.firstNumber / asnwer.secandNumber);
}
else {
    console.log("please select valid operators");
}
