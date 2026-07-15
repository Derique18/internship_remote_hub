"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the built-in Node.js readline module.
// This allows us to accept user input from the terminal.
var readline = require("readline");
// Create a readline interface that connects
// the terminal input and output streams.
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Set a fixed exchange rate.
// In this program, 1 USD = 1600 NGN.
var conversionRate = 1600;
// Set the transaction fee rate to 2%.
var transactionFeeRate = 0.02;
// Ask the user to enter their starting balance in USD.
rl.question("Enter your starting balance (USD): ", function (balanceInput) {
    // Convert the user's input from a string to a number.
    var startingBalance = Number(balanceInput);
    // Calculate the converted amount in NGN.
    var convertedAmount = startingBalance * conversionRate;
    // Calculate the 2% transaction fee.
    var transactionFee = convertedAmount * transactionFeeRate;
    // Calculate the final amount after deducting the fee.
    var finalAmount = convertedAmount - transactionFee;
    // Display a formatted transaction receipt.
    console.log("\n====================================");
    console.log("        Currency Receipt");
    console.log("====================================");
    console.log("Starting Balance: $".concat(startingBalance));
    console.log("Exchange Rate: 1 USD = ".concat(conversionRate, " NGN"));
    console.log("------------------------------------");
    console.log("Converted Amount: \u20A6".concat(convertedAmount.toLocaleString()));
    console.log("Transaction Fee (2%): \u20A6".concat(transactionFee.toLocaleString()));
    console.log("Final Amount: \u20A6".concat(finalAmount.toLocaleString()));
    console.log("====================================");
    console.log("Thank you for using our converter!");
    // Close the readline interface after the program finishes.
    rl.close();
});
