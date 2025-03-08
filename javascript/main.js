$(document).ready(function () {
    // mobile menu
    $("#menu-btn").click(function () {
        if ($("#menu").hasClass("hidden")) {
            $("#menu").removeClass("hidden").addClass("flex").hide().slideDown(600, function () {});
        } else {
            $("#menu").slideUp(600, function () {
                $(this).removeClass("flex").addClass("hidden");
            });
        }
        $(this).toggleClass("open");
    });

    // scroll to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 900) {
            $("#STB").fadeIn();
        } else {
            $("#STB").fadeOut();
        }
    });
    $("#STB").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 100);
        return false;
    }
    );

});

function ChangeImage(small) {
    $("#main-image").fadeOut(200, function () {
        $(this).attr("src", small.src).fadeIn(200);
    });
}
AOS.init();