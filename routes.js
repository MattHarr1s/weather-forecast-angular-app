/**
 * Created by Garage on 3/23/2016.
 */
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