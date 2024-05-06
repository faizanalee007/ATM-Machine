import inquirer from "inquirer";
let userBalance = 15000;
let userPin = 1515;
console.log(`\nYour current Account Balance is: ${userBalance}\n`);
let pinInput = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: "Enter your Account Pin Number: ",
});
if (pinInput.pin === userPin) {
    let fucntionInput = await inquirer.prompt([
        {
            name: "functionList",
            type: "list",
            choices: ["Withdraw", "Deposit", "Check Balance", "Exit"],
            message: "Choose the desired Function Below:",
        },
    ]);
    if (fucntionInput.functionList === "Withdraw") {
        let amountInput = await inquirer.prompt({
            name: "amount",
            type: "number",
            message: "Please Enter the Amount to Withdraw:",
        });
        if (amountInput.amount <= userBalance) {
            userBalance = userBalance - amountInput.amount;
            console.log(`\nYou have successfully withdrawn ${amountInput.amount}.`);
            console.log(`\nYour current Account Balance is ${userBalance}`);
        }
        else {
            console.log(`\nSorry! You have insufficient Amount!!`);
        }
    }
    else if (fucntionInput.functionList === "Check Balance") {
        console.log(`\nYour current Account Balance is: ${userBalance}\nTHANK YOU\n`);
    }
}
else {
    console.log(`\nSorry Incorrect Pin Number!!`);
}
