requirejs.config({
    baseUrl: "js",
    paths: {
        "X": "deps/X.min",
        "Impulse": "deps/Impulse.min"
    }
});


require(["navigation"]);