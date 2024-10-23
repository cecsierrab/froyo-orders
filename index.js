// connect js to html
// create a prompt to `enter a list of comma-seperated froyo flavors.`
const userInput = prompt(`Enter a list of comma-seperated froyo flavors.`)
// convert the user input into an array
const userInputArray= userInput.split(`,`);
// build object to track flavors
let froyoFlavor = {
  coffee: 0,
  vanilla: 0,
  strawberry: 0,
  chocolate: 0,
};
// calculate total amount of froyo flavors
const quantity = Object.values(froyoFlavor);
let totalAmount = 0;

for (let i = 0; i < quantity.length; i++) {
  totalAmount += quantity[i];
}

// 

console.log(totalAmount)