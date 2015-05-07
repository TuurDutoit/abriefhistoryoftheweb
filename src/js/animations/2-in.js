define(["events", "X"], function(events, X) {
    
    var $pane = X(".pane2");
    
    events.on(["2 in forward", "2 in backward"], function() {
        events.animate();
        $pane.addClass("show");
        
        
        setTimeout(function() {
            events.done();
            events.next();
        }, 1000+500);
    });
    
});