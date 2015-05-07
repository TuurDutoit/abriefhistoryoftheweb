(function(root, factory) {
    "use strict";
    
    if(typeof define === "function" && define.amd) {
        define(factory);
    }
    else if(typeof exports === "object") {
        module.exports = factory();
    }
    else {
        root.X = root.$ = factory();
    }
    
}(this, function() {
    "use strict";
    
    
    /*************
     * VARIABLES *
     *************/
    
    var old$ = window.$;
    var oldX = window.X;
    
    var rHTML = /^<(.|\n)+>$/;
    var rversion = /^[0-9]\.[0-9]\.[0-9]$/;
    var rmultipleSpaces = / {2,}/;
    
    
    
    
    
    /*************
     * UTILITIES *
     *************/
    
    var forEach = function(arr, cb) {
        for(var i = 0, len = arr.length; i < len; i++) {
            if(cb(arr[i], i, arr) === false) {
                break;
            }
        }
    }
    
    var reverseForEach = function(arr, cb) {
        for(var i = arr.length-1; i >= 0; i--) {
            if(cb(arr[i], i, arr) === false) {
                break;
            }
        }
    }
    
    var toArray = function(arr) {
        return arr ? (isArray(arr) ? arr : Array.prototype.slice.call(arr)) : null;
    }
    
    var concat = function(arr1, arr2) {
        Array.prototype.push.apply(arr1, arr2);
    }
    
    var isString = function(obj) {
        return typeof obj === "string";
    }
    
    var isNumber = function(obj) {
        return typeof obj === "number";
    }
    
    var isFunction = function(obj) {
        return typeof obj === "function";
    }
    
    var isObject = function(obj) {
        return typeof obj === "object" && !isArray(obj);
    }
    
    var isNode = function(obj) {
        return obj instanceof Node;
    }
    
    var isNodeList = function(obj) {
        return obj instanceof NodeList;
    }
    
    var isArray = function(obj) {
        return obj instanceof Array;
    }
    
    var isArrayLike = function(obj) {
        return obj instanceof Array || obj instanceof NodeList;
    }
    
    var isX = function(obj) {
        return obj && isString(obj.X) && rversion.test(obj.X);
    }
    
    var isParentOf = function(parent, child) {
        var current = child.parentElement;

        while(current !== document) {
            if(current === parent) {
                return true;
            }
            current = current.parentElement;
        }

        return false;
    }
    
    var changeClass = function(method, elems, className) {
        var split = className.replace(rmultipleSpaces, " ").split(" ");
        
        forEach(elems, function(elem) {
            forEach(split, function(name) {
                elem.classList[method](name);
            });
        });
    }
    
    var cssToObject = function(css) {
        var obj = {};
        var pairs = css.split(";");
        
        forEach(pairs, function(pair) {
            if(pair !== "") {
                console.log(pair);
                var pair = pair.split(":");
                console.log(pair);
                obj[pair[0]] = pair[1];
            }
        });
        
        return obj;
    }
    
    var objectToCss = function(obj) {
        var css = "";
        
        for(var prop in obj) {
            if(obj.hasOwnProperty(prop)) {
                css += prop + ":" + obj[prop] + ";";
            }
        }
        
        return css;
    }
    
    
    
    
    
    
    
    var X = function(selector, useCapture) {
        return isFunction(selector) ? (X.onLoad(selector, useCapture), X) : new X.fn.init(selector);
    }
    
    
    X.fn = X.prototype = {
        constructor: X,
        X: "0.0.1",
        
        init: function() {
            //iife, to preserve the 'Y' name
            return function Y(selector) {
                if(isX(selector)) {
                    return selector;
                }
                else if(isNode(selector)) {
                    this.elements = [selector];
                }
                else if(isNodeList(selector)) {
                    this.elements = toArray(selector);
                }
                else if(isArray(selector)) {
                    this.elements = selector;
                }
                else if(rHTML.test(selector)) {
                    this.elements = toArray(X.parseHTML(selector));
                }
                else if(isString(selector)) {
                    this.elements = toArray(document.querySelectorAll(selector));
                }
                else {
                    this.elements = [];
                }
                
                return this;
            }
        }(),
        
        forEach: function(cb) {
            forEach(this.elements, cb);
        },
        
        size: function() {
            return this.elements.length;
        },
        
        copy: function() {
            return X(this.elements);
        },
        
        concat: function(other) {
            concat(this.elements, other.elements);
            
            return this;
        },
        
        add: function(elem) {
            this.elements.push(elem);
            
            return this;
        },
        
        addAt: function(index, elem) {
            this.elements.splice(index, 0, elem);
            
            return this;
        },
        
        remove: function(elem) {
            var index = this.elements.indexOf(elem);
            if(index) {
                this.removeAt(index);
            }
            
            return this;
        },
        
        removeAt: function(index, amount) {
            this.elements.splice(index, isNumber(amount) ? amount : 1);
            
            return this;
        },
        
        addStack: function(stack) {
            concat(this.elements, stack);
            
            return this;
        },
        
        addStackAt: function(index, stack) {
            var args = concat([index, 0], stack);
            this.elements.splice.apply(this.elements, args);
            
            return this;
        },
        
        get: function(index) {
            return this.elements[index || 0];
        },
        
        addClass: function(className) {
            changeClass("add", this.elements, className);
            
            return this;
        },
        
        removeClass: function(className) {
            changeClass("remove", this.elements, className);
            
            return this;
        },
        
        toggleClass: function(className) {
            changeClass("toggle", this.elements, className);
            
            return this;
        },
        
        attr: function(name, val) {
            if(arguments.length === 2) {
                this.forEach(function(elem) {
                    elem.setAttribute(name, val);
                });
                
                return this;
            }
            else {
                var elem = this.get();
                return elem ? elem.getAttribute(name) : null;
            }
        },
        
        css: function(prop, value) {
            var css = cssToObject(this.attr("style") || "");
            console.log(css);
            
            if(isObject(prop)) {
                for(var key in prop) {
                    if(prop.hasOwnProperty(key)) {
                        css[key] = prop[key];
                    }
                }
            }
            else if(arguments.length === 2) {
                css[prop] = value;
            }
            else {
                return css[prop];
            }
            
            this.attr("style", objectToCss(css));
            
            return this;
        },
        
        on: function(event, cb, useCapture) {
            this.forEach(function(elem) {
                elem.addEventListener(event, cb, useCapture);
            });
            
            return this;
        },
        
        off: function(event, cb, useCapture) {
            this.forEach(function(elem) {
                elem.removeEventEventListener(event, cb, useCapture);
            });
            
            return this;
        },
        
        append: function(children) {
            if(!isArrayLike(children)) {
                children = [children];
            }
            
            this.forEach(function(elem) {
                forEach(children, function(child) {
                    elem.appendChild(child);
                });
            });
            
            return this;
        },
        
        prepend: function(elem) {
            if(!isArrayLike(children)) {
                children = [children];
            }
            
            this.forEach(function(elem) {
                reverseForEach(children, function(child) {
                    elem.insertBefore(child, elem.firstChild);
                });
            });
            
            return this;
        },
        
        html: function(html) {
            if(html) {
                this.forEach(function(elem) {
                    elem.innerHTML = html;
                });
                
                return this;
            }
            else {
                var elem = this.get();
                return elem ? elem.innerHTML : null;
            }
        },
        
        text: function(text) {
            if(text) {
                this.forEach(function(elem) {
                    elem.textContent = text;
                });
                
                return this;
            }
            else {
                var elem = this.get();
                return elem ? elem.textContent : null;
            }
        },
        
        value: function(val) {
            if(val) {
                this.forEach(function(elem) {
                    elem.value = val;
                });
                
                return this;
            }
            else {
                var elem = this.get();
                return elem ? elem.value : null;
            }
        },
        
        isParentOf: function(child) {
            this.forEach(function(elem) {
                if(isParentOf(elem, child)) {
                    return true;
                }
            });
            
            return false;
        },
        
        isChildOf: function(parent) {
            var Xparent = X(parent);
            this.forEach(function(elem) {
                if(Xparent.isParentOf(child)) {
                    return true;
                }
            });
            
            return false;
        },
        
        child: function(selector) {
            if(selector) {
                var good = document.querySelector(selector);
                
                this.forEach(function(elem) {
                    forEach(elem.children, function(child) {
                        if(good.indexOf(child) > -1) {
                            return child;
                        }
                    });
                });
            }
            else {
                var elem = this.get();
                return elem ? elem.firstChild : null;
            }
        },
        
        children: function(selector) {
            var newX = X();
            
            this.forEach(function(elem) {
                newX.addStack(elem.children);
            });
            
            if(selector) {
                newX.filter(selector);
            }
            
            return newX;
        },
        
        parent: function(selector) {
            if(selector) {
                var good = document.querySelector(selector);

                this.forEach(function(elem) {
                    if(good.indexOf(elem.parentElement) > -1) {
                        return elem.parentElement;
                    }
                });
                
                return null;
            }
            else {
                var elem = this.get();
                return elem ? elem.parentElement : null;
            }
        },
        
        parents: function(selector) {
            var newX = X();
            
            this.forEach(function(elem) {
                newX.add(elem.parentElement);
            });
            
            if(selector) {
                newX.filter(selector);
            }
            
            return newX;
        },
        
        filter: function(selector) {
            if(selector) {
                var self = this;
                var good = toArray(document.querySelector(selector));

                this.forEach(function(elem) {
                    if(good.indexOf(elem) === -1) {
                        self.remove(elem);
                    }
                });
            }
            
            return this;
        }
    }
    
    
    X.fn.find = X.fn.children;
    
    
    X.fn.init.prototype = X.fn;
    
    
    
    
    
    
    X.noConflict = function(deep) {
        if(window.$ === X) {
            window.$ = old$;
        }
        
        if(deep && window.X === X) {
            window.X = oldX;
        }
        
        return X;
    }
    
    
    X.parseHTML = function(html) {
        var elem = document.createElement("div");
        elem.innerHTML = html;
        return elem.children;
    }
    
    X.onLoad = function(cb, useCapture) {
        window.addEventListener("load", cb, useCapture);
    }
    
    
    
    
    return X;
    
    
    
}));