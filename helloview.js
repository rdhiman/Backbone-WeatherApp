$(document).ready( function() {
	$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=milwaukee,us', function(data){
			console.log(data.weather[0].main);
		});	
});