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
    
    var $slider = $(".slider").find("ul");

    var $sliderWidth = $slider.children().outerWidth();
    var $sliderHeight = $slider.children().outerHeight();
    var $length = $slider.children().length;
    var rollingId;


    rollingId = setInterval(function() { rollingStart(); }, 3000);

    function rollingStart() {
        $slider.css("width", $sliderWidth * $length + "px");
        $slider.css("height", $sliderHeight + "px");
    
        $slider.animate({left: -$sliderWidth + "px"}, 5000, function() { 
        
            $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
        
            $(this).find("li:first").remove();
        
            $(this).css("left", 0);
        
        });
    }
});