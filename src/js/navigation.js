define(["X", "animate"], function(X, animate) {
    
    
    var index = 0;
    var max = 2;
    var animating = false;
    
    var navigation = {
        animate: function() {
            animating = true;
            return this;
        },
        done: function() {
            animating = false;
            return this;
        },
        defer: function(time) {
            setTimeout(this.done, time);
            return this;
        }
    }
    
    var go = function(i) {
        if(!animating && i !== index && index <= max) {
            animate(index, i, navigation);
            index = i;
        }
    }
    
    var next = function() {
        go(index + 1);
    }
    
    var back = function() {
        go(index - 1);
    }
    
    
    navigation.go = go;
    navigation.next = next;
    navigation.back = back;
    
    
    
    
    
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
        next();
    });
    
    
    
});