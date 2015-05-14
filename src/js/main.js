requirejs.config({
    baseUrl: "js",
    paths: {
        jquery: "lib/jquery.min"
    }
});


require(["lib/slick.min"]);
require(["events", "elements", "animate", "navigation", "sidenav", "gallery"]);

require(["jquery"], function($) {
    $(".content-0").addClass("animate-in");
});