define(["events", "X"], function(events, X) {
    
    var $text = X(".pane1-start-text");
    var $button = X(".pane1-start-button");
    
    events.on("1.2 out backward", function() {
        events.animate();
        $text.removeClass("show");
        $button.removeClass("cursor align-left to-right");
        events.deferred("done", 800);
    });
    
});