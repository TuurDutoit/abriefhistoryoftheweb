define(["jquery", "elements", "slick"], function($, elements) {
    
    $(".gallery").each(function() {
        var $gallery = $(this);
        
        $gallery.find(".inner").slick({
            prevArrow: '<i class="fa fa-chevron-left arrow arrow-left"></i>',
            nextArrow: '<i class="fa fa-chevron-right arrow arrow-right"></i>',
            appendArrows: $gallery.find(".arrows")
        });
    });
    
});