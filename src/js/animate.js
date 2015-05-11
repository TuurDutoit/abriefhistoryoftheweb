define(["X"], function(X) {
    
    var $panes = X(".pane");
    var $pane0 = X(".pane0");
    
    
    return {
        normal: function(currentIndex, nextIndex, navigation) {
        
            var $current = X($panes.get(currentIndex));
            var $next = X($panes.get(nextIndex));


            if(currentIndex === 0) {
                $current.removeClass("special-animate animate-in").addClass("animate-out");
                var timeout = 1200;
            }
            else if(currentIndex === 1) {
                $current.removeClass("animate-in").addClass("animate-out");
                var timeout = 0;
            }
            else {
                $current.removeClass("animate-in").addClass("animate-out");
                var timeout = 2400;
            }


            setTimeout(function() {
                $current.removeClass("show");
                $next.addClass("show");

                setTimeout(function() {
                    $next.addClass("animate-in");
                    
                    if(nextIndex === 1) {
                        setTimeout(function() {
                            navigation.next();
                        }, 22000);
                    }
                }, 1000);
            }, timeout);
            
        },
        
        start: function() {
            $pane0.addClass("special-animate");
        }
        
        
    }
    
});