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
})

