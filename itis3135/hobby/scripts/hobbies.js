
function allhide()
{
    document.getElementById("who").style.display = "none";
    document.getElementById("history").style.display = "none";
    document.getElementById("food").style.display = "none";
    document.getElementById("when").style.display = "none";
    document.getElementById("what").style.display = "none";
    document.getElementById("how").style.display = "none";

}

function aboutme()
{
    allhide();
    var a = document.getElementById("who");
    a.style.display = "block";
    
}

function history()
{
    allhide();
    var b = document.getElementById("history");
    b.style.display = "block";
}

function food()
{
    allhide();
    var c = document.getElementById("food");
    c.style.display = "block";
    
}

function visitWhen()
{
    allhide();
    var d = document.getElementById("when");
    d.style.display = "block";

}

function scenery()
{
    allhide();
    var e = document.getElementById("what");
    e.style.display = "block";
}

function vehicles()
{
    allhide();
    var f = document.getElementById("how");
    f.style.display = "block";
}


