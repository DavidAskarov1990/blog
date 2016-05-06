jQuery(document).ready(function() {
    
    var element = 'button', current, ripple, d, x, y;
    
    $(element).click(function (e) {
        current = $(this);
        if (current.find(".ripple").length === 0) {
            current.addClass('prepare-ripple');
            current.prepend("<span class='ripple'></span>");
        }

        ripple = current.find(".ripple");
        ripple.removeClass("on-animate");

        if (!ripple.height() && !ripple.width()) {

            d = Math.max(current.outerWidth(), current.outerHeight());

            ripple.css({
                height: d,
                width: d
            });
        }

        x = e.pageX - current.offset().left - ripple.width() / 2;
        y = e.pageY - current.offset().top - ripple.height() / 2;

        ripple.css({
            top: y + 'px',
            left: x + 'px'
        }).addClass("on-animate");

        setTimeout(function ()
        {
            $('span.ripple').remove();
        }, 500)
    });
});    
    