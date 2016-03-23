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
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {

	$scope.city = cityService.city;

	$scope.$watch('city', function() {
		cityService.city = $scope.city;
	});

}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {

	$scope.city = cityService.city;

	$scope.days = $routeParams.days || 2;

	$scope.weatherAPPID = '33e00b2d7b558099c75e9542d516b2ee';

	$scope.weatherAPI =
		$resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
			callback: "JSON_CALLBACK"}, {get: { method: "JSONP"}
		});

		$scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days, appid: $scope.weatherAPPID});

		//Convert the results to Fahrenheit
		$scope.convertToFahrenheit = function(degK){
			return Math.round((1.8 *(degK - 273))+32)
		}

		//Convert the date results
		$scope.convertToDate = function(dt){

			return new Date(dt* 1000)
		}

// Custom directives
weatherApp.directive("weatherReport", function(){
	return {
		restrict: 'E',
		templateUrl: 'directives/weatherReport.html',
		replace: true,
		scope: {
			weatherDay:"=",
			convertToStandard: "&",
			convertToDate: "&",
			dateFormat: "@"
		}
	}
});
}]);