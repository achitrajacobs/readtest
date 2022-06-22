function displayBot() {
    var bot = document.getElementById("botFrame");
    if (bot.style.right == "-100%") {
        bot.style.right = "0"
    }
    else {
        bot.style.right = "-100%"
    }
}
function closeBot() {
    var bot = document.getElementById("botFrame");
    if (bot.style.right == "-100%") {
        bot.style.right = "0"
    }
    else {
        bot.style.right = "-100%"
    }
}
function resizeBot() {
    var bot = document.getElementById("botFrame");
    if (bot.style.width == "250px") {
        bot.style.width = "100%"
        bot.style.height = "100%"
    }
    else {
        bot.style.width = "250px";
        bot.style.height = "450px"
    }
}
$(document).ready(function(){
    $("#p1").mouseleave(function(){
        alert("Hey there!")
    });
    $("#user_account_toggle").click(function(){
        $("#min_menu").animate({
            height: 'toggle'
        });
    });

    $("#toggle_sideNav").click(function(){
        $(".sideNav").animate({
            width: 'toggle'
        })
    });
    $("#close").click(function () {
        $(".sideNav").animate({
            width: 'toggle'
        });
    });

});