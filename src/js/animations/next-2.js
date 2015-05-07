define(["X", "events"], function(X, events) {
    var $pane1 = X(".pane1");
    var $content1 = $pane1.find(".content");
    var $pane2 = X(".pane2");
    
    events.on("next 2", function() {
        $pane1.removeClass("show");
        $pane2.addClass("show");
    });
});