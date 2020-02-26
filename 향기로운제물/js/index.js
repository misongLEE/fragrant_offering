$(function(){
    $(".dep1 > li") .hover(function(){
        $(this).find(".dep2").stop().fadeIn();
    }, function(){
        $(this) .find(".dep2").stop().fadeOut();
    });
});





$(function(){
    //메뉴 열림
    $(".bt_menu").click(function(){
        $("#nav_wrap").fadeIn();
        $("html").addClass("stop_scroll");
    });

    //메뉴 닫힘
    $(".bt_menu_close, #nav_wrap .bg").click(function(){
        $("#nav_wrap").fadeOut();
        $("html").removeClass("stop_scroll");
    });


    $(".dep1 > li > a").click(function(){
        console.log(this);

        $(".dep1 > li ").not($(this).parent()).removeClass("on");
        $(this).parent().toggleClass("on"); 


        $(".dep2").slideUp();
        $(this).find("+ .dep2").stop().slideToggle();
    });
});