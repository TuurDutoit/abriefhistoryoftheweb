define(["events", "X"], function(events, X) {
    
    var $pane = X(".pane1");
    var $button = X(".pane1-start-button");
    
    events.on(["1.1 out backward", "1.1 out forward"], function() {
        events.animate();
        $pane.removeClass("show");
        $button.removeClass("cursor align-left");
        events.deferred("done", 800);
    });
    
});