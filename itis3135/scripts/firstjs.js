// Create a scriptTest function to let user know the script just start 
function scriptTest()
{
    alert("Hey my script is running");
}

// Declare variable
var name;
var feeling;

// Create a function question to ask user name and their feeling
// also display current date and current time
function questions()
{
    setName(prompt("Please enter your name", "Will Nguyen"))
    setFeeling(prompt("How are you feeling?","Great!"))

    document.getElementById('date').innerHTML = 'Today is' + getTodaysDate() + ', and the time is: ' + getCurrentTime();
    document.getElementById('greet').innerHTML = "Nguyen Designs welcomes you, " + getName() + '!\n' + "We are glad you are doing " + setFeeling() + ".";
}

// Setter
function setName(aname)
{
    this.name = aname;
}

function setFeeling(feeling)
{
    this.feeling = feeling;
}

// Getter
function getName()
{
    return aname;
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
