var elements = require("./elements");

var $extras = $(".content .extras");

$extras.each(function() {
    var $extra = $(this);
    var index = elements.getIndex($extra.parents(".content"));
    $extra.find(".fa-info").on("click", function(){ elements.activeID({type:"more", index:index}); });
    $extra.find(".fa-camera").on("click", function(){ elements.activeID({type:"gallery", index:index}); });
    $extra.find(".fa-link").on("click", function(){ elements.activeID({type:"sources", index:index}); });
});