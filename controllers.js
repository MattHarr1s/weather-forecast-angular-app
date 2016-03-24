/**
 * Created by Garage on 3/23/2016.
 */
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
