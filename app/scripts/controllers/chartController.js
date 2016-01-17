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
		var chartObject = chartService.getChartData(wsResponse);
		console.log('chartObject from service ' + new Date());
		console.log(JSON.stringify(chartObject));
		if (!_.isEmpty(chartObject)) {
			$scope.chartData = chartObject.data;
			$scope.chartColumns = chartObject.columns;
			$scope.chartX = chartObject.xAxis;
		}
	};

	$http.get('/sample_ws_response/spline-chart-two-x-two-y-small.json').success(function (response) {
		$scope.wsResponse = response;
		$scope.onLoad($scope.wsResponse);
	});
	
	//Columns for bar
	/*$scope.chartColumns = [{id: "data0", type: "bar", name: "#10 White Business Envelopes,4 1/8 x 9 1/2"},
	                       {id: "data1", type: "bar", name: "#10- 4 1/8\" x 9 1/2\" Recycled Envelopes"},
	                       {id: "data2", type: "bar", name: "#10- 4 1/8\" x 9 1/2\" Security-Tint Envelopes"},
	                       {id: "data3", type: "bar", name: "#10-4 1/8\" x 9 1/2\" Premium Diagonal Seam Envelopes"},
	                       {id: "data4", type: "bar", name: "*Staples* Highlighting Markers"},
	                       {id: "data5", type: "bar", name: "*Staples* Letter Opener"},
	                       {id: "data6", type: "bar", name: "*Staples* vLetter Openers, 2/Pack"},
	                       {id: "data7", type: "bar", name: "1.7 Cubic Foot Compact \"Cube\" Office Refrigerators"},
	                       {id: "data8", type: "bar", name: "12 Colored Short Pencils"}];*/
	//X axis for bar
	/*$scope.chartX = {id: "x"};*/
	
	//Data for line
	/*$scope.chartData = [{
							x : "#10 White Business Envelopes,4 1/8 x 9 1/2",
							data0 : "731132.24"
						}, {
							x : "#10- 4 1/8\" x 9 1/2\" Recycled Envelopes",
							data1 : "1786809.51"
						}, 
						{
							x : "#10- 4 1/8\" x 9 1/2\" Security-Tint Envelopes",
							data2 : "1986809.51"
						},
						{
							x : "#10-4 1/8\" x 9 1/2\" Premium Diagonal Seam Envelopes",
							data3 : "2786809.51"
						},
						{
							x : "*Staples* Highlighting Markers",
							data4 : "2486809.51"
						},
						{
							x : "*Staples* Letter Opener",
							data5 : "1986809.51"
						},
						{
							x : "*Staples* vLetter Openers, 2/Pack",
							data6 : "786809.51"
						},
						{
							x : "1.7 Cubic Foot Compact \"Cube\" Office Refrigerators",
							data7 : "1586809.51"
						},
						{
							x : "12 Colored Short Pencils",
							data8 : "986809.51"
						}];*/
	
}]);
