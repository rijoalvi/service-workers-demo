(function () {
	navigator.serviceWorker.register('/worker.js')
	    .then(function(){
	        console.log("serviceWorker registered successfully!");
	    },
	    function(){
	        console.log("failure registering serviceWorker..");
	    });
}());