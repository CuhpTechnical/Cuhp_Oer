$(document).ready(function () {
    var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
    $(function () {
        var i = 0;
        $(".intro-header").css("background-image", "url(../img/head_imgs/" + images[i] + ")");
        setInterval(function () {
            i++;
            if (i == images.length) {
                i = 0;
            }
            $(".intro-header").fadeOut("slow", function () {
                $(this).css("background-image", "url(../img/head_imgs/" + images[i] + ")");
                $(this).fadeIn("fast");
            });
        }, 10000);
    });
});