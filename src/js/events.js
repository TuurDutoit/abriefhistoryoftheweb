define(function() {
    
    var listeners = {};
    
    var EventEmitter = {
        listeners: listeners,
        on: function(event, listener) {
            if(!listeners[event]) {
                listeners[event] = [];
            }
            
            listeners[event].push(listener);
            
            return this;
        },
        emit: function(event, args) {
            if(listeners[event]) {
                for(var i = 0, len = listeners[event].length; i < len; i++) {
                    listeners[event][i].apply(null, args || []);
                }
            }
            
            return this;
        }
    }
    
    
    return EventEmitter;
    
});