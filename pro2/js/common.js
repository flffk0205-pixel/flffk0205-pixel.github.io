$(function(){
    $('#bt').click(function(){
        $('#bt1').slideToggle();
    });
 
    $('#menu-1> a, #submenu-1').mouseover(function(){
            $('#submenu-1').stop().slideDown(); });            
    $('#submenu-1').mouseout(function(){
            $(this).stop().slideUp(); });

    $('#menu-2> a, #submenu-2').mouseover(function(){
            $('#submenu-2').stop().slideDown(); });            
    $('#submenu-2').mouseout(function(){
            $(this).stop().slideUp(); });



    }) ;
