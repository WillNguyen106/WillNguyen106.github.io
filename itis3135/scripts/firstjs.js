// Create a scriptTest function to let user know the script just start 
function scriptTest()
{
    alert("Hey my script is running");
}

// Declare variable
var name;
var feeling;
var totalIncome;

// Create a function question to ask user name and their feeling
// also display current date and current time
function questions()
{
    setName(prompt("Please enter your name", "Will Nguyen"))
    setFeeling(prompt("How are you feeling?","Great!"))

    document.getElementById('date').innerHTML = 'Today is ' + getCurrentDate() + ', and the time is: ' + getCurrentTime();
    document.getElementById('greet').innerHTML = 'Nguyen Designs welcomes you, ' + getName() + '!\n' + "We are glad you are doing " + getFeeling();
}

// Setter
function setName(fullName)
{
    this.name = fullName;
}

function getName()
{
    return name;
}

function setFeeling(newFeeling)
{
    this.feeling = newFeeling;
}

function getFeeling()
{
    return feeling;
}

// Create function get current day
function getCurrentDate()
{
    let date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return days[date.getDay()] + ', ' + months[date.getMonth()] + ' ' + date.getDate();
} 

// Create function get current time
function getCurrentTime() 
{
    let date = new Date();
    let ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    let mins = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return date.getHours() % 12 + ':' + mins + ' ' + ampm;
}

function setTotalIncome(totalIncome)
{
    this.totalIncome = totalIncome;
}

function getTotalIncome()
{
    return totalIncome;
}

function calculateTax()
{
    const tax = 0.0725;
    let totalTax=0;
    setTotalIncome(prompt("Enter your total income: ",""))

    totalTax = getTotalIncome()*tax;

    document.getElementById('tax').innerHTML='Your total tax is: $' + totalTax.toFixed(2);

}



function calculateAve()
{
    const num1 = parseInt(prompt('Enter the first number: '))
    const num2 = parseInt(prompt('Enter the second number: '))

    const average = (num1 + num2)/2;

    document.getElementById('average').innerHTML='Your average of 2 numbers is: ' + average.toFixed(2);


}

function calculateHours()
{
    const days = parseFloat(prompt('Enter your number of days: '))

    const hours = days*24;

    document.getElementById('hours').innerHTML='The total hours of your days is: ' + hours.toFixed(2) +' hrs';
}

function calculateMinutes()
{
    const hours = parseFloat(prompt('Enter your number of hours: '))

    const minutes = hours*60;

    document.getElementById('minutes').innerHTML='The total minutes of your hours is: ' + minutes.toFixed(2) + ' min';

}

function calculateSeconds()
{
    const days = parseFloat(prompt('Enter your number of days: '))

    const seconds = days*86400;

    document.getElementById('second').innerHTML='The total second of your days is: ' + seconds.toFixed(2) + ' sec';
}