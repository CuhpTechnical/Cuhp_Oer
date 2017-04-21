$(document).ready(function () {

    // for navbar
    var a = $(".navbar").offset().top;
    var height = $("nav").height();
    $('.index').css({"margin-top":(height+10)});
    $(document).scroll(function(){
    if($(this).scrollTop() > a){
       $('.logo').css({"display":"none"});
       $('.index').css({"margin-top":(height+10)});
    } else {
       $('.logo').css({"display":"block"});
        $('.index').css({"margin-top":(height+10)});
    }
    });


    //navbar end

    /*$('#nav_a_login').click(function () {

    });*/

    $('#dean_msg_href').click(function () {
        $('#dean_msg_modal').modal({
            backdrop: 'static',
            keyboard: false
        });
    });

    $('#nav_a_sign').click(function () {
        $('#sign_modal').modal({
            backdrop: 'static',
            keyboard: false
        });
    });

    $('#nav_a_login').click(function () {
        $('#login_select_modal').modal({
            backdrop: 'static',
            keyboard: false
        });
    });

    $('#button_user_login').click(function () {
        $('#login_select_modal').modal('hide');
        $('#login_user_modal').modal({
            backdrop: 'static',
            keyboard: false
        });
    });

    $('#button_pg_login').click(function () {
        $('#login_select_modal').modal('hide');
        $('#login_pg_modal').modal({
            backdrop: 'static',
            keyboard: false
        });
    });

    $('#btn_login_back_user').click(function () {
        $('#login_user_modal').modal('hide');
        $('#login_select_modal').modal({
            backdrop: 'static',
            keyboard: false
        });
    });

    $('#btn_login_back_pg').click(function () {
        $('#login_pg_modal').modal('hide');
        $('#login_select_modal').modal({
            backdrop: 'static',
            keyboard: false
        });
    });
    
});