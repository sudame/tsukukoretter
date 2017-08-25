$(document).ready(function(){
    $("#men-switch-checkbox").change(function(){
        if($("#men-switch-checkbox").is(':checked')){
            $(".men-column").show();
        } else {
            $(".men-column").hide();
        }
    });

    $("#women-switch-checkbox").change(function(){
        if($("#women-switch-checkbox").is(':checked')){
            $(".women-column").show();
        } else {
            $(".women-column").hide();
        }
    });
});

$("iframe").on("load",function(){
    $("iframe").contents().find('.timeline-Viewport').css("-webkit-overflow-scrolling","touch");
});

