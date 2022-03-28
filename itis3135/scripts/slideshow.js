// Preload images
$(document).ready(function() {
    $("#image_list a").each(function() {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");

    });

    // Set up event handler for links
    $("#image_list a").click(function(evt) {
        //swap image
        var imageURL = $(this).attr("href");
        $("#main_image").attr("src", imageURL);

        //swap caption
        var caption = $(this).attr("title");
        $("#caption").text(caption);

        // cancel the default action of the link
        evt.preventDefault();
    });

    // Move focus to first thumbnail
    $("li:first-child a").focus();
});

