// Declare global variable and global array
var numberOfSide;
const array = ["henagon","digon","trigon","tetragon","pentagon","hexagon","heptagon","octagon","enneagon"];


// Create function that asking user to input there number from 1 to 10
function userInput()
{
    numberOfSide = parseInt(prompt("The Walnut Numbat would like your number: "))
    validateEntry();
    document.getElementById("polygon").innerHTML = 'This is a ' + getShape() + '.\n' + 'Have a good day!';
}

// Create a validation function to make sure the entry is a valid number
function validateEntry()
{   
    numberOfSide = Math.round(Math.abs(numberOfSide));
    while(numberOfSide > 10 || numberOfSide < -10 || isNaN(numberOfSide))
    {
        alert("Your number is not valid. Please enter your number again(1-10)");
        numberOfSide = parseInt(prompt("The Walnut Numbat would like your number: "))

    }

}

// Create a function that return a polygon name
function getShape(shape)
{   
   
    shape  = array[numberOfSide-1];
    return shape;
}
