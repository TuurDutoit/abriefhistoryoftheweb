define(["X", "events"], function(X, events) {
    var $text1 = X(".pane2 .content p:first-child");
    
    events.on("next 2.1", function() {
        events.emit("animate");
        $text1.addClass("show");
        
        setTimeout(function() {
            events.emit("done");
        }, 500);
    });
});