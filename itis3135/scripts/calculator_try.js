
// Function display values
function display(value)
{
    document.getElementById("total").value += value;
}

// Function evaluates the expression and calculate total
function calculate()
{
    var cal = document.getElementById("total").value;
    var cal1 = eval(cal);
    document.getElementById("total").value = cal1;
}

// Function calculate squared
function getSquared()
{
    var square = document.getElementById("total").value;
    var square1 = Math.pow(square,2);
    document.getElementById("total").value = square1;

}

// Function calculate Sin
function getSin()
{
    var sin = document.getElementById("total").value;
    var sin1 = Math.sin(sin);
    document.getElementById("total").value = sin1;
}

// Funciton calculate Cosin
function getCos()
{
    var cos = document.getElementById("total").value;
    var cos1 = Math.cos(cos);
    document.getElementById("total").value = cos1;
}

// Function calculate Tangent
function getTan()
{
    var tan = document.getElementById("total").value;
    var tan1 = Math.tan(tan);
    document.getElementById("total").value = tan1;
}

// Function increment
function getIncrement()
{
    var increment = document.getElementById("total").value;
        increment++;
        document.getElementById("total").value = increment;
}

// Function decrement
function getDecrement()
{
    var decrement = document.getElementById("total").value;
        decrement--;
        document.getElementById("total").value = decrement;
}


// Function clear all the values
function clearScreen()
{
    document.getElementById("total").value = "";
}

