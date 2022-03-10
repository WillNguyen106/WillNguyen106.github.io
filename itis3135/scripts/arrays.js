var $ = function(id)
{
    return document.getElementById(id);
};
window.onload = function()
{
    $("add_Salary").onclick = addSalary;
    $("display_Salary").onclick = displaySalary;
    $("display_Result").onclick = displayResult;
    $("name").focus()
}

/*
Create 2 arrays that take number of people and their salaries
Both of arrays should be constant
*/
const person =[];
const salary =[];



/*
Create function should add a person and salary to the arrays.
To test, click the Display Salary button and see if the new values have been added
*/
function addSalary()
{
    // add data validation to validate the entries must not be empty
    // and value has to be numeric
    // use alert()
    var name = $("name").value;
    var salaryInput = $("salary").value;
    salaryInput = parseInt(salaryInput);
    // Validate user input
    if(name == "")
    {
        alert("Please enter your name")
        return;
    }
    if(salaryInput < 0 || isNaN(salaryInput))
    {
        alert("Please enter your salary")
        return;
    }
    // Adding the input into array
    person.push(name);
    salary.push(salaryInput);
    // 
    $("add_Salary").innerHTML = "";
    $("name").focus();
}

/*
Create function should get the names and values from array
and display them as rows in the HTML table element
with "results_table" as its id
*/
function displaySalary()
{
    let display = document.getElementById("result_table")
    display.innerHTML = "<tr><th>Name</th><th>Salary</th></tr>";
    for(let i = 0;i<person.length;i++)
    {
        display.innerHTML += "<tr><td>"+ person[i] + "</td><td>" + salary[i] + "</td></tr>";
    }
    
}




/*
 It should derive the average salary and the highest from the array 
 and then display the results in the div element with “results” as its id
*/
function displayResult()
{
    var sum = 0;
    var average;
    var highest = 0;
    

    // Calculate sum of total salary
    for(let i =0;i<salary.length;i++)
    {
        sum += salary[i]; 
    }

    // Calculate average of total salary
    average = (sum/salary.length).toFixed(2);
    // Get the highest salary 
    for(let j = 1;j<salary.length;j++)
    {
        if(salary[highest]< salary[j])
        {
            highest = j;
        }
    }
    
    $("result").innerHTML = "<h2>Results</h2>" + "<p>Average salary is: " + average + " thousand" +"</p>" + "<p>The highest salary is: " + salary[highest] +"</p";

}



