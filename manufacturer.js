$(document).ready(function(){                

    $('nav').mouseover(function(){                    
        $('#sub_container').stop().slideDown('slow');
    });
    $('#sub_container').mouseleave(function(){
        $('#sub_container').stop().slideUp('slow');
    });

    $('#sub_1 li a').mouseover(function(){
        $('#menu_value').text("사업소개")
    });
    $('#sub_2 li a').mouseover(function(){
        $('#menu_value').text("제품소개")
    });
    $('#sub_3 li a').mouseover(function(){
        $('#menu_value').html("정비<br>서비스")
    });
    $('#sub_4 li a').mouseover(function(){
        $('#menu_value').text("고객센터")
    });    
    
});