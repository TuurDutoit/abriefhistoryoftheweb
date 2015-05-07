define(["events", "X"], function(events, X) {
    
    var $pane = X(".pane1");
    var $button = X(".pane1-start-button");
    
    events.on(["1.1 in forward", "1.1 in backward"], function() {
        events.animate();
        $pane.addClass("show");
        $button.addClass("cursor align-left").removeClass("to-right");
        
        setTimeout(function() {
            events.done();
            events.next();
        }, 800+500);
    });
    
});