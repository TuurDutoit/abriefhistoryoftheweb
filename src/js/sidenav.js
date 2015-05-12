define(["X", "navigation"], function(X, navigation) {
    
    var $sidenav = X(".side-nav");
    var sidenav = $sidenav.get();
    var toArray = function(arr) {
        Array.prototype.slice.call(arr);
    }
    var indexOf = function(arr, item) {
        toArray(arr);
        arr.indexOf(item);
    }
    
    $sidenav.on("click", function(e) {
        var target = e.target;
        var index = indexOf(sidenav.children, target);
        navigation.go(index);
    });
    
});