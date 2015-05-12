define(["X", "animate"], function(X, animate) {
    
    
    var index = 0;
    var max = 2;
    var animating = false;
    
    var go = function(i) {
        if(!animating && i !== index && index <= max) {
            animating = true;
            setTimeout(function(){ animating = false; }, 1000);
            
            animate.normal(index, i, navigation);
            index = i;
        }
    }
    
    var next = function() {
        go(index + 1);
    }
    
    var back = function() {
        go(index - 1);
    }
    
    
    var navigation = {
        go: go,
        next: next,
        back: back
    }    
    
    
    
    
    X(document).on("keydown", function(e) {
        switch(e.keyCode) {
            case 37:
            case 38:
                back();
                break;
            case 39:
            case 40:
                next();
                break;
        }
    })
    .on("scroll", function(e) {
        if(e.deltaY > 0) {
            next();
        }
        else if(e.deltaY < 0) {
            back();
        }
    })
    .on("touchend", function(e) {
        /* ... */
    });
    
    
    X(".navigation").on("click", function(e) {
        var $target = X(e.target);
        var $parent = $target.parent();
        var children = $parent.children();
        var index = children.indexOf(e.target);
        
        if(index > -1) {
            go(index);
        }
    });
    
    
    X(".pane0-start-button").on("click", function() {
        animate.start();
    });
    
    
    
    
    return navigation;
    
    
    
});