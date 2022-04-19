
$(document).ready(function() {
    
}); // end read
// Create function for JSON file and get data from json_files folder
function docData(fileName) {
    $.getJSON("./json_files/" + fileName,function(data){
        $.each(data,function(){
            $.each(this,function(key,value){
                $("#month").text(value.month);
                $("#name").text(value.speaker);
                $("#text").text(value.text);
                $("#title").text(value.title);
                $("#image").attr('src',value.image)
            });


        });

    });
}
