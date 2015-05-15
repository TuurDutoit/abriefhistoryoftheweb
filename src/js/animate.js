define(["jquery", "events", "elements", "sidenav", "start"], function($, events, elements, sidenav, start) {
    
    
    var $start = $(".content-0");
    
    
    events.on("go", function($active, $next) {
        var nextID = elements.getID($next);
        var activeID = elements.activeID();
        var activeClass = "animate-out";
        var activeTimeout = 0;

        var activeBg = $active.css("background");
        var nextBg = $next.css("background");
        var sameBg = activeBg === nextBg;
        var bgTimeout = sameBg ? 0 : 1000;



        switch(activeID.type) {
            case "content":
            case "more":
            case "sources":
                activeTimeout += 3*400;
                break;
            case "gallery":
                activeTimeout += 4*400;
                break;
        }



        if(activeID.index === 0) {
            if($active.hasClass("special-animate")) {
                activeClass = "special-out";
            }
            
            activeTimeout = 2*400;
        }
        else if(activeID.index === 1) {
            activeTimeout = 1*1000;

        }


        
        $active.addClass(activeClass);

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