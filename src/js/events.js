define(["X"], function(X) {
    
    
    /*************
     * VARIABLES *
     *************/
    
    var listeners = {};
    var steps = ["1", "1.1", "1.2", "2", "2.1", "2.2", "2.3"];
    var animating = 0;
    var currentIndex = 0;
    var max = steps.length;
    
    
    
    /*************
     * FUNCTIONS *
     *************/
    var on = function(name, listener) {
        if(name instanceof Array) {
            for(var i = 0, len = name.length; i < len; i++) {
                on(name[i], listener);
            }
        }
        else {
            if(!listeners[name]) {
                listeners[name] = [];
            }

            listeners[name].push(listener);
        }
        
        return this;
    }
    
    var off = function(name, listener) {
        if(name instanceof Array) {
            for(var i = 0, len = name.length; i < len; i++) {
                off(name[i], listener);
            }
        }
        else if(listeners[name]) {
            if(!listener) {
                listeners[name] = [];
            }
            else {
                var Listeners = listeners[name];
                var index = Listeners.indexOf(listener);
                if(index > -1) {
                    Listeners.splice(index, 1);
                }
            }
        }
        
        return this;
    }
    
    var emit = function(name, args) {
        if(!args) {
            args = [];
        }
        var Listeners = listeners[name];

        if(Listeners) {
            for(var i = 0, len = Listeners.length; i < len; i++) {
                Listeners[i].apply(Listeners[i], args);
            }
        }
        
        return this;
    }
    
    var deferred = function(event, args, time) {
        if(typeof args === "number") {
            time = args;
            args = [];
        }

        setTimeout(function() {
            emit(event, args);
        });
        
        return this;
    }
    
    var next = function() {
        go(currentIndex+1);
        
        return this;
    }
    
    var back = function() {
        go(currentIndex-1);
        
        return this;
    }
    
    var go = function(index) {
        if(typeof index === "number" &&  index !== currentIndex && index >= 0 && index < max && animating === 0) {
            var direction = index - currentIndex > 0 ? "forward" : "backward";
            emit(steps[currentIndex]+" out "+direction);
            currentIndex = index;
            emit(steps[currentIndex]+" in "+direction);
        }
        
        return this;
    }
    
    var Animating = function(val) {
        if(arguments.length === 0) {
            return animating;
        }
        else {
            animating = val;
            return this;
        }
    }
    
    var CurrentIndex = function(val) {
        if(arguments.length === 0) {
            return currentIndex;
        }
        else {
            go(val);
            return this;
        }
    }
    
    var animate = function() {
        animating++;
        
        return this;
    }
    
    var done = function() {
        animating--;
        
        return this;
    }
    
    
    
    
    
    
    
    /******************
     * ANIMATION FLOW *
     ******************/
    
    on("animate", function() {
        animate();
    });
    on("done", function() {
        done();
    });
    on("next", next);
    on("back", back);
    on("go", function(index) {
        go(index);
    });
    
    
    
    
    
    /*******************
     * EVENT LISTENERS *
     *******************/
    
    document.addEventListener("keydown", function(e) {
        switch(e.keyCode) {
            case 39:
            case 40:
                next();
                break;
            case 37:
            case 38:
                back();
                break;
        }
    });
    
    
    document.addEventListener("wheel", function(e) {
        if(e.deltaY > 0) {
            next();
        }
        else {
            back();
        }
    });
    
    
    document.addEventListener("touch", function(e) {
        /* ... */
    });
    
    
    X(".pane1-start-button").on("click", function(e) {
        next();
    });
    
    
    
    
    
    var Events = {
        listeners: listeners,
        steps: steps,
        animating: Animating,
        currentIndex: CurrentIndex,
        go: go,
        on: on,
        off: off,
        emit: emit,
        deferred: deferred,
        next: next,
        back: back,
        animate: animate,
        done: done
    };
    
    
    return Events;
    
    
});