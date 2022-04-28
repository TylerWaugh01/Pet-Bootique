// $("#infobutton").on('click', function () {
//     if ($("#cardchange").hasClass("cardColor2")) {
//         $("#cardchange").removeClass("cardColor2");
//         $("#cardchange").addClass("cardColor3");
//         console.log("Test");
//     } else {
//         $("#cardchange").removeClass("cardColor3");
//         $("#cardchange").addClass("cardColor2");
//         console.log("Test2");
//     }
// });




$(function () {
    $(".carousel").carousel({ interval: 4000 });
    $("#carouselButton").on('click', function () {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
    
    $('[data-toggle="popover"]').popover(); 

    $('#loginButton').on('click', function() {
        $('#loginModal').modal('show');
    });


$('.cardColor3').hide();
$('#infoButton').on('click', function() {
    $('.cardColor2, .cardColor3').toggle()
  }
);


    // $("#infoButton").on('click', function () {
    //     if ($("#card1").hasClass("cardColor2")) {
    //         $("#card1").removeClass("cardColor2");
    //         $("p").remove(); 
    //         $("#card1").addClass("cardColor3");
    //     } else {
    //         $("#card1").removeClass("cardColor3");
    //         $("#card1").addClass("cardColor2");
    //     }
    // });

});




