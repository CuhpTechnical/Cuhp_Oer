 // dropdown open hover
/*$(window).resize(function () {
    var width = $(window).width();
    /*if (width >= 900) {*/
        /* Code for big screen */
       /* $('ul.nav li.dropdown').hover(function () {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
        }, function () {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
        });
    /*}
    else {
         $('ul.nav li.dropdown').click(function () {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
        });
    }
});*/
var width = $(window).width();
    alert(width);
    if (width >= 768) {
        jQuery('ul.nav li.dropdown').hover(function () {
            jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
        }, function () {
            jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
        });

        alert(width);
    }
     

    $(window).resize(function () {
        var width = $(window).width();
        alert(width);
        if (width >= 768) {
            jQuery('ul.nav li.dropdown').hover(function () {
                jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
            }, function () {
                jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
            });

            alert(width);
        }
        
    });