/**
 * Created by Garage on 3/23/2016.
 */
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