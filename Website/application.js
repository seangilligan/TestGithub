
$(document).ready(function(){
    $("#clickme").click(function(){
        $("#clickme").hide();       
        $("#unclickme").show();
        $("#pic").slideDown();

    });
});

$(document).ready(function(){
    $("#unclickme").click(function(){
        $("#pic").slideUp();
        $("#unclickme").hide();       
        $("#clickme").show();
    });
});

