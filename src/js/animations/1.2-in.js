define(["events", "X"], function(events, X) {
    
    var $pane = X(".pane1");
    var $text = X(".pane1-start-text");
    var $button = X(".pane1-start-button");
    
    events.on(["1.2 in forward", "1.2 in backward"], function() {
        events.animate();
        $pane.addClass("show");
        $text.removeClass("hidden");
        $button.addClass("cursor align-left to-right");
        events.deferred("done", 800);
    });
    
});