define(["events", "X"], function(events, X) {
    
    var $pane = X(".pane2");
    var $text = X(".pane2 .content p:nth-child(2)");
    
    events.on(["2.2 in forward", "2.2 in backward"], function() {
        events.animate();
        $pane.addClass("show");
        $text.addClass("show");
        events.deferred("done", 800);
    });
    
});