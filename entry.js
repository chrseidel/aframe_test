define(["./node_modules/rx/dist/rx.all.js"], function(rx){
    var loadEvent = rx.Observable.fromEvent(window, 'load').take(1);
    loadEvent.forEach(function(x){
        console.log("document load");
        var boden = document.querySelector("#boden");
        var bodenClicks = rx.Observable.fromEvent(boden, 'click');
        bodenClicks.forEach(function(click){
		boden.setAttribute("position", "10, 0, 0");		
	})
    })
});
