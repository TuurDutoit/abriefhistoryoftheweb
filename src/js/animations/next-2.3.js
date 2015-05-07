define(["X", "events"], function(X, events) {
    var $text2 = X(".pane2 .content p:nth-child(2)");
    var $text3 = X(".pane2 .content p:last-child");
    
    events.on("next 2.3", function() {
        events.emit("animate");
        $text2.removeClass("show");
        
        setTimeout(function() {
            $text3.addClass("show");
        
            setTimeout(function() {
                events.emit("done");
            }, 500);
        }, 500+250);
    });
});