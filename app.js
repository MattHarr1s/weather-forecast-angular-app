// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// ROUTES
weatherApp.config(function ($routeProvider) {

	$routeProvider

			.when('/', {
				templateUrl: 'pages/home.htm',
				controller: 'homeController'
			})

			.when('/forecast', {
				templateUrl: 'pages/forecast.htm',
				controller: 'forecastController'
			})

			.when('/forecast/:days', {
				templateUrl: 'pages/forecast.htm',
				controller: 'forecastController'
			})

});


//SERVICES
weatherApp.service('cityService', function() {
	this.city = "New York, NY";
});

// CONTROLLERS
weatherApp.controller('homeController', ['$scope','cityService', function($scope, cityService) {

	$scope.city = cityService.city;

	$scope.watch('city', function(){
		cityService.city = $scope.city;
	});

}]);

weatherApp.controller('forecastController', ['$scope','$resource','cityService', function($scope, $resource, cityService) {

	$scope.city = cityService.city;

	$scope.weatherAPPID = '33e00b2d7b558099c75e9542d516b2ee';

	$scope.weatherAPI =
		$resource("http://api.openweathermap.org/data/2.5/forecast/daily?", {
			callback: "JSON_CALLBACK"}, {get: { method: "JSONP"}
		});

		$scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt:2, appid: $scope.weatherAPPID});

		//Convert the results to Fahrenheit
		$scope.convertToFahrenheit = function(degK){
			return Math.round((1.8 *(degK - 273))+32)
		}
}]);