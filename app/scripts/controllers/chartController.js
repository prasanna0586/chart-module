'use strict';

/**
 * @ngdoc function
 * @name c3AngularChartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the c3AngularChartApp
 */
angular.module('c3AngularChartApp').controller('chartCtrl', ['$scope', 'chartService', function ($scope, chartService) {
	
	$scope.onLoad = function () {
		$scope.chartData = new Array();
		$scope.chartColumns = new Array();
		$scope.chartX = new Object();
		var wsResponse = chartService.getWSResponse();
		var chartObject = chartService.getChartData(wsResponse);
		if (!_.isEmpty(chartObject)) {
			$scope.chartData = chartObject.data;
			$scope.chartColumns = chartObject.columns;
			$scope.chartX = chartObject.xAxis;
		}
	};
	
	/*$scope.onChartLoad = function () {
		var chartArrayofObj = $scope.responseFromWebSocket.response.charts;
		var chartID, chartType, chartData, chartAxis, chartXAxis;
		$scope.chartData = new Array();
		$scope.chartColumns = new Array();
		for (var i = 0; i < chartArrayofObj.length; i++) {
			chartID = chartArrayofObj[i].chartId;
			chartType = chartArrayofObj[i].type;
			chartData = chartArrayofObj[i].chartData;
			chartAxis = chartData.axis;
			if (chartAxis && chartAxis.length > 0) {
				for (var j = 0; j < chartAxis.length; j++) {
					var chartDataObj = new Object();
					chartXAxis = chartAxis[j].nodeLabel;
					chartDataObj.x = chartXAxis;
					if (chartAxis[j].axis && chartAxis[j].axis.length > 0) {
						for (var k = 0; k < chartAxis[j].axis.length; k++) {
							chartDataObj[chartAxis[j].axis[k].nodeLabel] = chartAxis[j].axis[k].nodeValue;		
							var chartColumnsObj = $scope.createChartColumnObj(chartAxis[j].axis[k], chartType);				
							$scope.chartColumns.push(chartColumnsObj);
						}
					} else {
						chartDataObj[chartAxis[j].nodeLabel] = chartAxis[j].nodeValue;	
						var chartColumnsObj = $scope.createChartColumnObj(chartAxis[j], chartType);
						$scope.chartColumns.push(chartColumnsObj);
					}
					$scope.chartData.push(chartDataObj);
				}
			}
			if (chartType != "donut") {
				$scope.chartX = {"id": "x"};
			}
		}
	};

	$scope.createChartColumnObj = function (chartAxis, chartType) {
		var chartColumnsObj = new Object();
		var label = chartAxis.nodeLabel;
		var value = chartAxis.nodeValue;

		chartColumnsObj.id = label;
		chartColumnsObj.type = chartType;
		chartColumnsObj.name = label;

		return chartColumnsObj;
	};*/

	$scope.onLoad();
}]);
