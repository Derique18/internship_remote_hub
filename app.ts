// Import the built-in Node.js readline module.
// This allows us to accept user input from the terminal.
import * as readline from "readline";

// Create a readline interface that connects
// the terminal input and output streams.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Set a fixed exchange rate.
// In this program, 1 USD = 1600 NGN.
const conversionRate: number = 1600;

// Set the transaction fee rate to 2%.
const transactionFeeRate: number = 0.02;

// Function that performs one conversion 
function startConversion(): void {

// Ask the user to enter their starting balance in USD.
rl.question("Enter your starting balance (USD): ", (balanceInput: string) => {

    // Convert the user's input from a string to a number.
    const startingBalance: number = Number(balanceInput);

    // Calculate the converted amount in NGN.
    const convertedAmount: number = startingBalance * conversionRate;

    // Calculate the 2% transaction fee.
    const transactionFee: number = convertedAmount * transactionFeeRate;

    // Calculate the final amount after deducting the fee.
    const finalAmount: number = convertedAmount - transactionFee;

    // Display a formatted transaction receipt.
    console.log("\n====================================");
    console.log("        Currency Receipt");
    console.log("====================================");
    console.log(`Starting Balance: $${startingBalance}`);
    console.log(`Exchange Rate: 1 USD = ${conversionRate} NGN`);
    console.log("------------------------------------");
    console.log(`Converted Amount: ₦${convertedAmount.toLocaleString()}`);
    console.log(`Transaction Fee (2%): ₦${transactionFee.toLocaleString()}`);
    console.log(`Final Amount: ₦${finalAmount.toLocaleString()}`);
    console.log("====================================");
    console.log("Thank you for using our converter!");

    // Close the readline interface after the program finishes.
    // Ask the user if they want to perform another conversion.
        rl.question("\nDo you want to perform another conversion? (Y/N): ", (answer: string) => {

            // Convert the answer to lowercase so both Y/y and N/n work.
            answer = answer.toLowerCase();

            // If the user enters Y, start the process again.
            if (answer === "y") {

                console.log();

                startConversion();

            }
            // If the user enters N, close the program.
            else if (answer === "n") {

                console.log("\nThank you for using our currency converter. Goodbye!");

                rl.close();

            }
            // If the user enters anything else.
            else {

                console.log("\nInvalid option. Please enter Y or N.");

                startConversion();

            }

        });

    });

}

// Start the first conversion.
startConversion();