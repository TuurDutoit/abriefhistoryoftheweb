var elements = require("./elements");

var $panes = $(".more, .sources, .gallery");

$panes.each(function() {
    var $pane = $(this);
    var $close = $('<i class="fa fa-close close"></i>');
    $close.on("click", function(e) {
        elements.activeType("content");
    });
    $pane.append($close);
});