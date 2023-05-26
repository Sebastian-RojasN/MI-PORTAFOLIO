$(document).ready(function(){
    // var visibleDiv = 1;
    $("#more-info").click(function(){
        // if (visibleDiv === 1){
        //     $("#sub-item-1").fadeIn(1000, function(){
        //         $("#sub-item-2").fadeIn(1000);
        //         visibleDiv = 2;
        //     });
        // }
        // else if (visibleDiv === 2){
        //     $("#sub-item-1").fadeOut(1000, function(){
        //         $("#sub-item-2").fadeOut(1000);
        //         visibleDiv = 1;
        //     });
        // }
        if($("#sub-item-1").hasClass("d-none") || $("#sub-item-2").hasClass("d-none")){
            $("#sub-item-1").removeClass("d-none");
            $("#sub-item-2").removeClass("d-none");
        }
        else {
            $("#sub-item-1").addClass("d-none");
            $("#sub-item-2").addClass("d-none");
        }

        // if($("#sub-item-1").hasClass("d-none") || $("#sub-item-2").hasClass("d-none")){
        //     $("#sub-item-1").fadeIn(1000, function(){
        //         $("#sub-item-2").fadeIn(1000);
        //     });
        // }
        // else if($("#sub-item-1").hasClass("d-none")){
        //     $("#sub-item-1").fadeIn(1000, function(){
        //         $("#sub-item-2").fadeIn(1000);
        //     });
        // }
    });
});