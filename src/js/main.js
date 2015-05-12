requirejs.config({
    baseUrl: "js",
    paths: {
        "X": "deps/X.min",
        "Impulse": "deps/Impulse.min"
    }
});


require(["navigation"]);

require(["X"], function(X) {
    X(".pane0").addClass("animate-in");
});