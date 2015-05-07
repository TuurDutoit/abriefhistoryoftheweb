define(["events", "X"], function(events, X) {
    
    var $pane = X(".pane2");
    var $text = X(".pane2 .content p:last-child");
    
    events.on(["2.3 out forward", "2.3 out backward"], function() {
        events.animate();
        $pane.removeClass("show");
        $text.removeClass("show");
        events.deferred("done", 800);
    });
    
});