'use strict';

/**
 * @ngdoc function
 * @name c3AngularChartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the c3AngularChartApp
 */
angular.module('c3AngularChartApp').controller('chartCtrl', ['$scope', 'chartService', '$http', function ($scope, chartService, $http) {
	
	$scope.onLoad = function (wsResponse) {
		$scope.chartData = new Array();
		$scope.chartColumns = new Array();
		$scope.chartX = new Object();
		console.log('wsResponse ctrl');
		console.log(wsResponse);
		var chartObject = chartService.getChartData(wsResponse);
		if (!_.isEmpty(chartObject)) {
			$scope.chartData = chartObject.data;
			$scope.chartColumns = chartObject.columns;
			$scope.chartX = chartObject.xAxis;
		}
	};

	$http.get('/sample_ws_response/bar-chart-with-two-x-two-y.json').success(function (response) {
		$scope.wsResponse = response;
		$scope.onLoad($scope.wsResponse);
	});
}]);
