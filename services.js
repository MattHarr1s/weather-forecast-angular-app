/**
 * Created by Garage on 3/23/2016.
 */
//SERVICES
weatherApp.service('cityService', function() {

	this.city = "New York, NY";

});


//Convert the results to Fahrenheit
$scope.convertToFahrenheit = function(degK){
	return Math.round((1.8 *(degK - 273))+32)
}

//Convert the date results
$scope.convertToDate = function(dt){

	return new Date(dt* 1000)
}

}]);