define(["X"], function(X) {
    var div = X("<div>").get(0);
    div.width = "";
    div.width = "10vh";
    
    if(!div.width) {
        X("head").appendChild( X("<style>").html("html,body{height:100%;}.pane{height:100%;}") );
    }
});