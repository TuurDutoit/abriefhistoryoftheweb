requirejs.config({
    baseUrl: "js",
    paths: {
        slick: "lib/slick.min"
    }
});


require(["lib/jquery.event.move", "lib/jquery.event.swipe"]);
require(["animate", "navigation", "sidenav", "extras", "close", "gallery"]);



require(["jquery"], function($) {
    $(".content-0").addClass("animate-in");
});


console.log("All the source of this website is available at: https://github.com/TuurDutoit/abriefhistoryoftheweb");