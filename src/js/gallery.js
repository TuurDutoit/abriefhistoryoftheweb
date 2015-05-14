define(["jquery", "elements"], function($, navigation) {
    
    $(".pane .gallery").slick({
        prevArrow: '<i class="fa fa-chevron-left arrow arrow-left"></i>',
        nextArrow: '<i class="fa fa-chevron-right arrow arrow-right"></i>'
    })
    .each(function(index) {
        var $gallery = $(this);
        var $close = $('<i class="fa fa-close close"></i>');
        $close.on("click", function(e) {
            elements.activeIndex(index);
        });
        $gallery.append($close);
    });
    
});