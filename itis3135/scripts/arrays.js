var $ = function()
{
    return document.getElementById(id);
};
window.onload = function()
{
    $("add_Salary").innerHTML = addSalary;
    $("display_Salary").innerHTML = displaySalary;
    $("display_Result").innerHTML = displayResult;
}

/*
Create 2 arrays that take number of people and their salaries
Both of arrays should be constant
*/
const person =[];
const salaries =[];


/*
Create function should add a person and salary to the arrays.
To test, click the Display Salary button and see if the new values have been added
*/
function addSalary()
{
    // add data validation to validate the entries must not be empty
    // and value has to be numeric
    // use alert()
    alert("testing");
}

/*
Create function should get the names and values from array
and display them as rows in the HTML table element
with "results_table" as its id
*/
function displaySalary()
{

}




/*
 It should derive the average salary and the highest from the array 
 and then display the results in the div element with “results” as its id
*/
function displayResult()
{

}


