define(function() {
    
    
    var Listeners = {};
    
    var EventEmitter = {
        on: function(name, listener) {
            if(!Listeners[name]) {
                Listeners[name] = [];
            }
            
            Listeners[name].push(listener);
        },
        emit: function(name, args) {
            if(!args) {
                args = [];
            }
            var listeners = Listeners[name];
            
            if(listeners) {
                for(var i = 0, len = listeners.length; i < len; i++) {
                    listeners[i].apply(listener, args);
                }
            }
        }
    };
    
    
    
    var animating = 0;
    
    EventEmitter.on("animate", function() {
        animating++;
    });
    EventEmitter.on("done", function() {
        animating--;
    });
    
    
    
    
    var steps = [1, 1.1, 1.2, 2, 2.1, 2.2, 2.3];
    var index = 0;
    var max = steps.length-1;
    
    var forward = function() {
        if(index < max && animating === 0) {
            index++;
            console.log("forward step-"+steps[index]);
            EventEmitter.emit("forward step-"+steps[index]);
        }
    }
    
    var back = function() {
        if(index && animating === 0) {
            index--;
            console.log("back step-"+steps[index]);
            EventEmitter.emit("back step-"+steps[index]);
        }
    }
    
    
    document.addEventListener("keydown", function(e) {
        switch(e.keyCode) {
            case 39:
            case 40:
                forward();
                break;
            case 37:
            case 38:
                back();
                break;
        }
    });
    
    
    document.addEventListener("wheel", function(e) {
        if(e.deltaY > 0) {
            forward();
        }
        else {
            back();
        }
    });
    
    
    document.addEventListener("touch", function(e) {
        /* ... */
    });
    
    
    
    return EventEmitter;
    
    
});