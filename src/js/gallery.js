var elements = require("./elements");

$(".gallery").each(function() {
    var $gallery = $(this);

    $gallery.find(".inner").slick({
        prevArrow: '<div class="arrow arrow-left"><i class="fa fa-chevron-left"></i></div>',
        nextArrow: '<div class="arrow arrow-right"><i class="fa fa-chevron-right"></i></div>'
    });
});