define(["X", "events"], function(X, events) {
    var $text1 = X(".pane2 .content p:first-child");
    var $text2 = X(".pane2 .content p:nth-child(2)");
    
    events.on("next 2.2", function() {
        events.emit("animate");
        $text1.removeClass("show");
        
        setTimeout(function() {
            $text2.addClass("show");
        
            setTimeout(function() {
                events.emit("done");
            }, 500);
            
        }, 500+250);
    });
});