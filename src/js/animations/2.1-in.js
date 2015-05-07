define(["events", "X"], function(events, X) {
    
    var $pane = X(".pane2");
    var $text = X(".pane2 .content p:first-child");
    
    events.on(["2.1 in forward", "2.1 in backward"], function() {
        events.animate();
        $pane.addClass("show");
        $text.addClass("show");
        events.deferred("done", 800);
    });
    
});