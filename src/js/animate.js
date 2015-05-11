define(["X"], function(X) {
    
    var $panes = X(".pane");
    var $pane0 = X(".pane0");
    
    
    return {
        normal: function(currentIndex, nextIndex, navigation) {
        
            var $current = X($panes.get(currentIndex));
            var $next = X($panes.get(nextIndex));
            var isIntro = currentIndex === 0 && $current.hasClass("special-animate");

            
            if(isIntro) {
                $current.addClass("special-out");
                var timeout = 1000;
            }
            else if(currentIndex === 0) {
                $current.removeClass("special-animate animate-in").addClass("animate-out");
                var timeout = 1200;
            }
            else if(currentIndex === 1) {
                $current.removeClass("animate-in").addClass("animate-out");
                var timeout = 1000;
            }
            else {
                $current.removeClass("animate-in").addClass("animate-out");
                var timeout = 2400;
            }


            setTimeout(function() {
                $current.removeClass("show");
                $next.addClass("show");
                
                if(isIntro) {
                    $current.removeClass("special-out special-animate");
                }

                setTimeout(function() {
                    $next.addClass("animate-in");
                }, 1000);
            }, timeout);
            
        },
        
        start: function() {
            $pane0.removeClass("animate-in animate-out").addClass("special-animate");
        }
        
        
    }
    
});