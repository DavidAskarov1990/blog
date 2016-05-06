
jQuery(document).ready(function()
{
    var el = document.querySelector('#greeting');

    var options = {
        size: 100,         
        weight: 14,        
        rounded: false,    
        color: '#fff',
        duration: 1,       
        delay: [0, .15],  
        fade: 1.5,        
        easing: d3_ease.easeCubicInOut.ease, 
        individualDelays: false              
    };

    var myText = new Letters(el, options);

    myText.show();

    setTimeout(function () {
        $('#greeting').animate({opacity:'0'}, 3000, function () {
            $('#greeting').css({'display':'none'})
        })
    }, 7000);
});

