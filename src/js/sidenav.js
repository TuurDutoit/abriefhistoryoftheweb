var elements = require("./elements");

var $sidenav = $(".side-nav");
var $panes = $(".content");

$panes.each(function(index) {
    var $dot = $('<div class="dot" title="Go to: ' + (index === 0 ? "Home" : "Part "+index) + '"></div>');
    $sidenav.append($dot);
});

var dots = $sidenav.find(".dot").toArray().map($);
var $currentDot = dots[0];
$currentDot.addClass("selected");

var select = function(index) {
    $currentDot.removeClass("selected");
    $currentDot = dots[index].addClass("selected");

    return this;
}

$sidenav.on("click", function(e) {
    var $target = $(e.target);
    if(!$target.hasClass("selected")) {
        elements.activeID({type:"content", index: $target.index()});
    }
});



exports.select = select;