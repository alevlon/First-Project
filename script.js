$(document).ready(function() 
{
    var rotateX = 0;
    var rotateY = 0;

    $(document).keydown(function(e) 
    {
        if (e.keyCode == 37) rotateY -= 4;
        if (e.keyCode == 38) rotateX += 4;
        if (e.keyCode == 39) rotateY += 4;
        if (e.keyCode == 40) rotateX -= 4;


        $('.wrap').css("transform", "rotateX(" + -rotateX + "deg) rotateY(" + -rotateY + "deg)");
    })
});