'use strict';

/**
 * @ngdoc function
 * @name c3AngularChartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the c3AngularChartApp
 */
angular.module('c3AngularChartApp').controller('chartCtrl', function ($scope) {
	$scope.splineXData = "Jul2015,Aug2015,Sep2015,Oct2015";
	$scope.splineYData = "2921447.69,4371204.81,4140342.82,1088671.77";
	
	//The first set of chartData and chartColumns is for a bar chart and the second one is for a donut chart
	//chartX is not needed for a donut chart
	
	//$scope.chartData = [{"x": 1,"data2":2921447.69},{"x": 2,"data2":4371204.81}, {"x": 3,"data2":4140342.82}, {"x": 4,"data2":1088671.77}];
	$scope.chartData = [{"data1":2921447.69},{"data2":4371204.81}, {"data3":4140342.82}, {"data4":1088671.77}];//Data for donut
	//$scope.chartColumns = [{"id": "data2", "type": "bar", "name": "Sale_Amount"}];
	//Columns for donut
	$scope.chartColumns = [{"id": "data1", "type": "donut", "name": "Aug"},
	                       {"id": "data2", "type": "donut", "name": "Sep"},
	                       {"id": "data3", "type": "donut", "name": "Oct"},
	                       {"id": "data4", "type": "donut", "name": "Nov"}];
	//$scope.chartX = {"id": "x", "name": "Month"};

});
