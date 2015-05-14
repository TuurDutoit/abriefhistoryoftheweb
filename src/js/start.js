define(["jquery", "elements"], function($, elements) {
    
    var $pane = $(".content-0");
    var $title = $(".content-0 .title, .content-0 .subtitle");
    var $text = $(".content-0 .start-text");
    var $button = $(".content-0 .start-button");
    var $buttonText = $(".content-0 .start-button span");
    
    
    
    var start =  function() {
        $pane.addClass("special-animate");
    }
    
    
    start.hide = function() {
        $pane.addClass("special-out");
    }
    
    
    
    return start;
    
});