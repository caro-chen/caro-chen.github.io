function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function hideContent() {
    var x = document.getElementById("section-ourTeam");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

jQuery(document).ready(function($){
    $('.topnav').css("background-color", "transparent");
    $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.topnav').css("background-color", "white").css("transition","0.3s ease-in-out");
        $('.topnav').css("border-bottom", "1px solid #c0c0c0").css("transition","0.3s ease-in-out");
        $('.active').css("border-bottom", "2px solid #030e64").css("transition","0.3s ease-in-out");
    } else {
        $('.topnav').css("background-color", "transparent").css("transition","0.3s ease-in-out");
        $('.topnav').css("border-bottom", "1px solid transparent").css("transition","0.3s ease-in-out");
        $('.active').css("border-bottom", "2px solid transparent").css("transition","0.3s ease-in-out");
    }
    });
});
