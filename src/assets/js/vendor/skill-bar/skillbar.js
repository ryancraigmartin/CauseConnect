// JavaScript Document

//jQuery to collapse the navbar on scroll
$(window).scroll(function () {
    if ($(".skills-1").offset().top < 50) {
        jQuery('.skillbar').each(function () {
            jQuery(this).find('.progressbar').animate({
                width: jQuery(this).attr('data-percent')
            }, 6000);
        });
    }
});

// JavaScript Document
var $animation_elements = $('.skills-1');
var $window = $(window);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            jQuery('.skillbar, .skillbar-2').each(function () {
                jQuery(this).find('.progressbar').animate({
                    width: jQuery(this).attr('data-percent')
                }, 6000);
            });
        } else {
        }
    });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');