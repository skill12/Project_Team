    
$(document).ready(function(){

    var isOpen=false;
    $('#location_p1 a #p1_first_li').click(function(){
        if(!isOpen){
            $('#location_p1 a .p1_child_li').slideDown('slow');
            // css('display','block');
            isOpen=true;
        }else{
            $('#location_p1 a .p1_child_li').slideUp('slow');
            // css('display','none');
            isOpen=false;
        }
    });
    $('li.p1_child_li').mouseover(function(){                        
        $(this).css('background-color','rgb(238,238,238)');
    });
    $('li.p1_child_li').mouseleave(function(){                        
        $(this).css('background-color','white');
    });

});