define(["X"], function(X) {
    
    var $panes = X(".pane");
    
    
    return function(currentIndex, nextIndex, navigation) {
        navigation.animate();
        
        var $current = X($panes.get(currentIndex));
        var $next = X($panes.get(nextIndex));
        
        
        if(currentIndex === 0 && nextIndex === 1) {
            var timeout = 2000;
            var defer = 2000;
        }
        else if(currentIndex === 1 && nextIndex === 2) {
            var timeout = 2000;
            var defer = 2000;
        }
        else if(currentIndex === 2 && nextIndex === 3) {
            var timeout = 2000;
            var defer = 2000;
        }
        else if(currentIndex === 1 && nextIndex === 0) {
            var timeout = 2000;
            var defer = 2000;
        }
        else if(currentIndex === 2 && nextIndex === 1) {
            var timeout = 2000;
            var defer = 2000;
        }
        else if(currentIndex === 3 && nextIndex === 2) {
            var timeout = 2000;
            var defer = 2000;
        }
        else {
            var timeout = 2000;
            var defer = 2000;
        }
        
        
        $current.removeClass("show");
        setTimeout(function() {
            $next.addClass("show");
        }, timeout);
        
                
        
        navigation.defer(defer);
    }
    
});