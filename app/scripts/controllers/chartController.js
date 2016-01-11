'use strict';

/**
 * @ngdoc function
 * @name c3AngularChartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the c3AngularChartApp
 */
angular.module('c3AngularChartApp').controller('chartCtrl', function ($scope) {                      
	 //$scope.chartData = []
	  
	  
	  
	//Data for donut
	//$scope.chartData = [{"data1":2921447.69},{"data2":4371204.81}, {"data3":4140342.82}, {"data4":1088671.77}];
	//Columns for donut
	/*$scope.chartColumns = [{"id": "data1", "type": "donut", "name": "Aug"},
		                       {"id": "data2", "type": "donut", "name": "Sep"},
		                       {"id": "data3", "type": "donut", "name": "Oct"},
		                       {"id": "data4", "type": "donut", "name": "Nov"}];*/
	  
	//Data for bar
	$scope.chartData = [{"x": "Aug, 2015","data2":2921447.69, "data3": 1574897.80},
	                    {"x": "Sep, 2015","data2":4371204.81}, 
	                    {"x": "Oct, 2015","data2":4140342.82}, 
	                    {"x":"Nov, 2015","data2":1088671.77}];
	//Columns for bar
	$scope.chartColumns = [{"id": "data2", "type": "bar", "name": "Sale_Amount"},{"id": "data3", "type": "bar", "name": "Discount"}];
	//X axis for bar
	$scope.chartX = {"id": "x", "name": "Month"};

});
