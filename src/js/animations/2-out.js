define(["events", "X"], function(events, X) {
    
    var $pane = X(".pane2");
    
    events.on(["2.1 in forward", "2.1 in backward"], function() {
        events.animate();
        $pane.removeClass("show");
        events.deferred("done", 1000);
    });
    
});