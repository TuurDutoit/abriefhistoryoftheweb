requirejs.config({
    baseUrl: "js",
    paths: {
        "X": "deps/X.min",
        "Impulse": "deps/Impulse.min"
    }
});

requirejs(["events"]);
requirejs(["animations/1-in", "animations/1-out", "animations/1.1-in", "animations/1.1-out", "animations/1.2-in", "animations/1.2-out-forward"]);
requirejs(["animations/1.2-out-backward", "animations/2-in", "animations/2-out", "animations/2.1-in", "animations/2.1-out"]);
requirejs(["animations/2.2-in", "animations/2.2-out", "animations/2.3-in", "animations/2.3-out"]);