define(["events", "X"], function(events, X) {
    
    var $pane = X(".pane1");
    
    events.on("1.2 out forward", function() {
        events.animate();
        $pane.removeClass("show");
        events.deferred("done", 1000);
    });
    
});