// Currency Conversion Engine

// Explicitly typed variables
const startingBalance: number = 500;
const conversionRate: number = 1600;
const transactionFeeRate: number = 0.02;

// Calculated converted amount
const convertedAmount: number = startingBalance * conversionRate;
// Calculated transaction fee
const transactionFee: number = convertedAmount * transactionFeeRate;

// Final amount after deducting the transaction fee
const finalAmount: number = convertedAmount - transactionFee;


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

