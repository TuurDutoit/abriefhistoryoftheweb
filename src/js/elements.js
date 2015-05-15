define(["jquery", "events"], function($, events) {
    
    var $panes = $(".pane");
    var panes = $panes.toArray().map($);
    
    
    var rid = /(content|more|sources|gallery)-[0-9]+/;
    var rtypes = /^(content|more|sources|gallery)/;
    
    
    
    var exports = {
        init: function() {
            $panes = $(".pane");
            panes = $panes.toArray().map($);
        },
        get: function(index) {
            return panes[index];
        },
        getContent: function(index) {
            return $(".content-"+index);
        },
        getMore: function(index) {
            return $(".more-"+index);
        },
        getSource: function(index) {
            return $(".sources-"+index);
        },
        getGallery: function(index) {
            return $(".gallery-"+index);
        },
        getID: function($elem) {
            var className = $elem.attr("class");
            var idStr = className.match(rid)[0];
            var split = idStr.split("-");
            
            return {type: split[0], index: parseInt(split[1])};
        },
        getType: function($elem) {
            return this.getID($elem).type;
        },
        getIndex: function($elem) {
            return this.getID($elem).index;
        },
        getAbsIndex: function($elem) {
            return $panes.index($elem);
        },
        getElem: function(id) {
            switch(id.type) {
                case "content":
                    return this.getContent(id.index);
                case "more":
                    return this.getMore(id.index);
                case "sources":
                    return this.getSource(id.index);
                case "gallery":
                    return this.getGallery(id.index);
            }
        },
        active: function($new, id) {
            if($new) {
                events.emit("go", [$active, $new]);
                $active = $new;
                activeID = id || this.getID($new);
                return this;
            }
            else {
                return $active;
            }
        },
        activeID: function(id) {
            if(id) {
                this.active(this.getElem(id), id);
                return this;
            }
            else {
                return activeID;
            }
        },
        activeIndex: function(index) {
            if(typeof index === "number") {
                var id = {type: activeID.type, index: index};
                this.activeID(id);
                return this;
            }
            else {
                return activeID.index;
            }
        },
        activeType: function(type) {
            if(type) {
                var id = {type: type, index: activeID.index};
                this.activeID(id);
                return this;
            }
            else {
                return activeID.type;
            }
        },
        valid: function(id) {
            if(id.index < 0 || !rtypes.test(id.type)) {
                return false;
            }
            switch(id.type) {
                case "content":
                    return 
            }
        }
    }
    
    
    var $active = $(".content-0");
    var activeID = exports.getID($active);
    
    
    
    return exports;
    
});