define(["events", "X"], function(events, X) {
    
    var $pane = X(".pane1");
    var $title = X(".pane1-inner-title, .pane1-inner-subtitle");
    
    events.on("1 in backward", function() {
        events.animate();
        $pane.addClass("show");
        $title.removeClass("hidden");
        events.deferred("done", 800);
    });
    
});