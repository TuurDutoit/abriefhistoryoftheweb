define(["jquery", "elements"], function($, elements) {
    
    var $panes = $(".more, .sources, .gallery");
    
    setTimeout(function(){
        $panes.each(function() {
            var $pane = $(this);
            var $close = $('<i class="fa fa-close close"></i>');
            $close.on("click", function(e) {
                elements.activeType("content");
            });
            $pane.append($close);
        });
    }, 1);
    
});