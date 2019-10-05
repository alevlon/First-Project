$(document).ready(function() 
{
    var rotateX = 0;
    var rotateY = 0;

    $('.container-wrap').mousemove(function(e) 
    {
        rotateX = (e.pageX - $(this).offset().left - $(this).width()/2)/2;
        rotateY = (e.pageY - $(this).offset().top - $(this).height()/2)/2;

        
        $('.wrap').css("transform", "rotateX(" + -rotateY + "deg) rotateY(" + rotateX + "deg)");
    })
    $('.container-wrap').mouseleave(function() 
    {
        rotateY = 0;
        rotateX = 0;

        $('.wrap').css("transform", "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)");
    })
});