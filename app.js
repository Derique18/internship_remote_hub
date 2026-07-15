"use strict";
// Currency Conversion Engine
// Explicitly typed variables
const startingBalance = 500;
const conversionRate = 1600;
const transactionFeeRate = 0.02;
// Calculated converted amount
const convertedAmount = startingBalance * conversionRate;
// Calculated transaction fee
const transactionFee = convertedAmount * transactionFeeRate;
// Final amount after deducting the transaction fee
const finalAmount = convertedAmount - transactionFee;
// Display receipt
console.log("====================================");
console.log("       Currency Receipt");
console.log("====================================");
console.log(`Starting Balance: $${startingBalance}`);
console.log(`Exchange Rate: 1 USD = ${conversionRate} NGN`);
console.log("------------------------------------");
console.log(`Converted Amount: ₦${convertedAmount.toLocaleString()}`);
console.log(`Transaction Fee (2%): ₦${transactionFee.toLocaleString()}`);
console.log(`Final Amount: ₦${finalAmount.toLocaleString()}`);
console.log("====================================");
console.log("Thank you for using our converter!");
