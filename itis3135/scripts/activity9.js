
/* This code bellow is for slideshow in Vietnam scenery section*/
// Set Slide index of slide show
let slideIndex = 1;

// Create funciton for slideshow
slideShow(slideIndex)

// Increase Slider
function nextSlide()
{
    slideShow(slideIndex+=1); 
}

// Decrease slide
function previousSlide()
{
    slideShow(slideIndex-=1);
}

// Current slide
function currentSlide(n)
{
    slideShow(slideIndex = n);
}

//Flip funciton
function slideShow(n)
{
    // Get element from html by item class
    let slides = document.getElementsByClassName("item");

    // Checking the number of slide
    if(n > slides.length)
    {
        slideIndex = 1;
    }
    if(n < 1)
    {
        slideIndex = slides.length;
    }

    //Loop through each slide in a for loop//
    for(let i = 0;i < slides.length;i++)
    {
        slides[i].style.display = "none";
    }

    // Making an element block
    slides[slideIndex-1].style.display = "block";

    
}