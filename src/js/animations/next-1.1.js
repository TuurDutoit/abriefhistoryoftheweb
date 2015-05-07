define(["events", "X"], function(events, X) {
    var $title = X(".pane1-inner-title, .pane1-inner-subtitle");
    var $button = X(".pane1-start-button");
    var $text = X(".pane1-start-text");
    
    events.on("next 1.1", function() {
        events.emit("animate");
        $title.addClass("hidden");
        $button.addClass("cursor align-left");
        
        setTimeout(function() {
            $text.removeClass("hidden");
            $button.addClass("to-right");
            
            setTimeout(function() {
                events.emit("done");
            }, 600);
        }, 600+600);
    });
});