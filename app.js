//Module for weather app
var weatherApp = angular.module('weatherApp','ngRoute','ngResource',[]);

//Routes for single page application
weatherApp.config(function($routeProvider){

	$routeProvider

	.when('/',{
		templateUrl: 'pages/home.htm',
		controller: 'homeController'
	})

	.when('/forecast',{
		templateUrl:'/pages/forecast.htm',
		controller:'forecastController'
	})

});

//Controllers
weatherApp.controller('homeController', ['$scope', function($scope){

}]);

weatherApp.controller('forecastController', ['$scope', function($scope){

}]);