define(["jquery", "elements"], function($, elements) {
    
    var $pane = $(".content-0");
    
    
    
    var start =  function() {
        $pane.addClass("special-animate");
    }
    
    
    start.hide = function() {
        $pane.addClass("special-out");
    }
    
    
    
    return start;
    
});