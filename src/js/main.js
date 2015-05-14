requirejs.config({
    baseUrl: "js",
    paths: {
        jquery: "lib/jquery.min",
        slick: "lib/slick.min"
    }
});


require(["animate", "navigation", "sidenav", "extras", "gallery", "close"]);

require(["jquery"], function($) {
    $(".content-0").addClass("animate-in");
});