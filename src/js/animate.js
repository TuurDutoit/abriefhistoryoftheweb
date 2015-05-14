define(["jquery", "events", "elements", "sidenav", "start"], function($, events, elements, sidenav, start) {
    
    
    var $start = $(".content-0");
    
    
    events.on("go", function($active, $next) {
        console.log($active, $next);
        
        var nextID = elements.getID($next);
        var activeID = elements.activeID();
        var activeTimeout = 0;
        var activeClass = "animate-out";
        var nextClass = "animate-in";

        var activeBg = $active.css("background");
        var nextBg = $next.css("background");
        var sameBg = activeBg === nextBg;
        var bgTimeout = sameBg ? 0 : 1000;



        switch(activeID.type) {
            case "content":
                activeTimeout += 3*800;
                if(nextID.type !== "content") {
                    activeTimeout += 2*800;
                }
                break;
            case "more":
            case "sources":
                activeTimeout += 2*800;
                break;
            case "gallery":
                activeTimeout += 4*800;
                break;
        }



        if(activeID.index === 0) {
            if($active.hasClass("special-animate")) {
                activeClass = "special-out";
                activeTimeout = 1000;
            }
            else {
                activeTimeout = 2*800;
            }
        }

        if(activeID.index === 1) {
            activeTimeout = 1*1000;
        }


        if($active.hasClass("special-animate")) {
            $active.addClass("special-out");
        }
        else {
            $active.addClass("animate-out");
        }

        $active.removeClass("show-in show-out");
        $next.removeClass("show-in show-out");

        setTimeout(function() {
            if(!sameBg) {
                $active.addClass("show-out");
                $next.addClass("show-in");
            }

            $active.removeClass("show");
            $next.addClass("show");



            setTimeout(function() {
                sidenav.select(nextID.index);

                setTimeout(function() {
                    $active.removeClass("animate-in animate-out special-animate special-out");
                    $next.addClass("animate-in");
                }, 300);
            }, bgTimeout);
        }, activeTimeout);
    });
    
    
    
    events.on("start", function() {
        $start.addClass("special-animate");
    });
    
});







/*
define(["jquery", "navigation", "sidenav"], function($, navigation, sidenav) {
    
    var $panes = $(".pane");
    var $pane0 = $(".pane0");
    
    
    navigation.on("go", function(currentIndex, nextIndex) {
        var $current = $($panes.get(currentIndex));
        var $next = $($panes.get(nextIndex));
        var isIntro = currentIndex === 0 && $current.hasClass("special-animate");


        if(isIntro) {
            $current.addClass("special-out");
            var timeout = 1200;
        }
        else if(currentIndex === 0) {
            $current.addClass("animate-out");
            var timeout = 1000;
        }
        else if(currentIndex === 1) {
            $current.addClass("animate-out");
            var timeout = 1000;
        }
        else {
            $current.addClass("animate-out");
            var timeout = 2400;
        }


        setTimeout(function() {
            $current.removeClass("show");
            $next.addClass("show");

            $current.removeClass("animate-in animate-out special-animate special-out");
            
            var currentBg = $current.css("background");
            var nextBg = $next.css("background");
            var sameBg = currentBg === nextBg;

            setTimeout(function() {
                sidenav.select(nextIndex);
                
                setTimeout(function() {
                    $next.addClass("animate-in");
                }, 300);
            }, sameBg ? 0 : 1000);
        }, timeout);

    });

    navigation.on("start", function() {
        $pane0.removeClass("animate-in animate-out").addClass("special-animate");
    });
    
    
    
});
*/