define(["jquery", "elements"], function($, elements) {
    
    var $sidenav = $(".side-nav");
    var dots = $sidenav.find(".dot").toArray().map($);
    var $currentDot = dots[0];
    
    var select = function(index) {
        $currentDot.removeClass("selected");
        $currentDot = dots[index].addClass("selected");
        
        return this;
    }
    
    $sidenav.on("click", function(e) {
        var index = $(e.target).index();
        elements.activeIndex(index);
    });
    
    
    
    return {
        select: select
    };
    
    
});