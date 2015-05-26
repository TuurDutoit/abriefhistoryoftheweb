var elements = require("./elements");
var start = require("./start");



var timeout = false;

var go = function(index) {
    if(!timeout && elements.activeType() === "content") {
        timeout = true;
        setTimeout(function(){ timeout = false; }, 500);

        elements.activeIndex(index);
    }
}

var next = function() {
    go(elements.activeIndex() + 1);
}

var back = function() {
    go(elements.activeIndex() - 1);
}

var close = function() {
    elements.activeType("content");
}



$(document).on("keydown", function(e) {
    switch(e.keyCode) {
        case 37:
        case 38:
            back();
            break;
        case 39:
        case 40:
            next();
            break;
        case 27:
            close();
            break;
    }
})
.on("wheel", function(e) {
    if(e.originalEvent.deltaY > 0) {
        next();
    }
    else if(e.originalEvent.deltaY < 0) {
        back();
    }
})
.on("swipeleft swipeup", function(e) {
    /* ... */
    next();
})
.on("swiperight swipedown", function(e) {
    back();
});


$(".content-0 .start-button").on("click", function() {
    start();
});