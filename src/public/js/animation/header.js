
jQuery(document).ready(function()
{
    var headerContainer = $('header');
    var headerLink = $('#header-link');
    var headerTitle = $('#header-title');
    var headingLinkButton = $('#header-link button');
    var headingPositionFirst = $('#header-position-first');
    var headingPositionSecond = $('#header-position-second');
    var headingPositionSecondTitle = $('#header-position-second span');

    headerContainer.delay(2200).animate({opacity: 0.9}, 1500, function () {
        headerContainer.css({'opacity':'1'})
    });
    


    headingPositionFirst.mouseover(function () {
        
        if(headingPositionFirst.is(':animated')==false)
        {
            if(headerTitle.css('opacity')==1)
            {
                headerLink
                    .animate({height:'60px'},200)
                    .css({display:'block'})
            }
        }
    });
    
    
    
    headingPositionFirst.mouseleave(function ()
    {
        headerLink.stop(true, true);
        headerLink.animate({height:'0px'}, 200, function () {
            headerLink.css({display:'none'});
        });
    });
    
    
    
    headingPositionSecondTitle.click(function() {
        headingPositionSecond.toggle( "explode" );

        setTimeout(function ()
        {
            headerContainer.css({paddingTop:'0'});
            headingPositionSecond.css({'display':'none'});

            headingPositionFirst.css({
                'opacity':'0',
                'display': 'block'
            }).animate({'opacity':'1'}, 1000);
        },1500);
    });
    
    
    headingLinkButton.click(function ()
    {
        headingPositionSecondTitle.text($(this).text());
        
        headerLink.delay(600).animate({height:'0px'},200, function () {
                headerLink.css({display:'none'});
        });

        headerContainer.delay(600).animate({paddingTop:'40px'},360, function ()
        {
            if(headingPositionFirst.find(".hide-pos").length === 0)
            {
                headingPositionFirst.addClass('hide-pos');
            }
            headingPositionFirst.animate(
                {
                    borderSpacing: 90
                },
                {
                    step: function (now, fx) 
                    {
                        fx.start= 0;
                        $(this).css('transform', 'rotateX(' + now + 'deg)');
                        $(this).css({'height': '100px'});
                        $(this).addClass('opacity-dissolving');
                    },
                    duration: 777,
                    complete: function () 
                    {
                        $(this).css({'display': 'none', 'transform': 'rotateX(0deg)'});
                        $(this).removeClass('opacity-dissolving hide-pos');
                    }
                });
        });

        headingPositionSecond.delay(1300)
            .animate(
            {
                borderSpacing: 95
            },
            {
                step: function ()
                {
                    headingPositionSecond.css({'display': 'block'});
                    headingPositionSecond.addClass('rotateHeading_0_deg');
                },
                duration: 800
            });
    });
});

