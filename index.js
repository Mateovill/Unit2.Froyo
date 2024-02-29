//I am going to add a popup window prompt so that the customer can put the flavor ice cream that they want.
const userInputString = prompt("Please enter the flavors of Froyo that you would like. Each seperated by commas.");

//I need to seperate each in put from a string into seperate arrays. I will do this by taking out the comma.
const flavorArray = userInputString.split(",");

// I want to see my progress as I enter the code so I will console.log the flavorArray variable.
console.log(flavorArray);

//I will create a function to keep record each user input that I am recieving.
function countFlavors(array) {
    const flavorObject = { };

    //In order to look get a number of flavors inputted I need to create a for loop to count all of the user input flavors.
    for (let i = 0; i < flavorArray.length; i++) {

        //Because we do not have our indexes defined we need to create the property and give it a value of one.
        if (flavorObject[array[i]] === undefined) {
            //once the array equals one we know that it has been assigned a value and we will add an else statment to ensure the loops ends when the statement is no longer true.
            flavorObject[array[i]] = 1;
        } else {
            //once the index is given the value, we will continue to add the indexes until the statment is not true and we will no longer count that specific array.
            flavorObject[array[i]] += 1;

        }
    }
    console.log(flavorObject);
}
//We know need a function to return all of the inputs given from the customer and thier quantatity.
countFlavors(flavorArray);