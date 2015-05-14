define(["jquery", "elements", "slick"], function($, elements) {
    
    $(".gallery").slick({
        prevArrow: '<i class="fa fa-chevron-left arrow arrow-left"></i>',
        nextArrow: '<i class="fa fa-chevron-right arrow arrow-right"></i>'
    });
    
});