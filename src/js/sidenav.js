define(["jquery", "navigation"], function($, navigation) {
    
    var $sidenav = $(".side-nav");
    
    $sidenav.on("click", function(e) {
        var index = $(e.target).index();
        navigation.go(index);
    });
    
});