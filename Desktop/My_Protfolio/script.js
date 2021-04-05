$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar1').addClass("sticky");
        } else {
            $('.navbar1').removeClass("sticky");
        }
    });
    // Toggle menu/navbar script  
    $('#fuck').click(function() {
        $('.navbar1 .menu1 li').toggleClass("active");
    });
})

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// // function myFunction() {
// //     var x = document.getElementById("myTopnav");
// //     if (x.className === "navbar") {
// //         x.className += " responsive";
// //     } else {
// //         x.className = "navbar";
// //     }
// // }
// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//         x.className += " responsive";
//     } else {
//         x.className = "topnav";
//     }
// }