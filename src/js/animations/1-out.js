define(["events", "X"], function(events, X) {
    
    var $pane = X(".pane1");
    var $title = X(".pane1-inner-title, .pane1-inner-subtitle");
    
    events.on("1 out forward", function() {
        events.animate();
        $pane.removeClass("show");
        $title.addClass("hidden");
        events.deferred("done", 800);
    });
    
});