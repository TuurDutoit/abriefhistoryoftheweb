requirejs.config({
    baseUrl: "js",
    paths: {
        jquery: "deps/jquery.min"
    }
});


require(["deps/slick.min"])
require(["navigation", "sidenav", "gallery"]);

require(["jquery"], function($) {
    $(".pane0").addClass("animate-in");
});