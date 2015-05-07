define(["events", "X"], function(events, X) {
    
    var $pane = X(".pane2");
    var $text = X(".pane2 .content p:last-child");
    
    events.on(["2.3 in forward", "2.3 in backward"], function() {
        events.animate();
        $pane.addClass("show");
        $text.addClass("show");
        events.deferred("done", 800);
    });
    
});