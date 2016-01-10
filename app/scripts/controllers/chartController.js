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
	
	/*if ($scope.splineYData) {
		var tickOne, tickTwo, tickThree;
		var partsOfStr = $scope.splineYData.split(',');
		console.log('partsOfStr ' + partsOfStr);
		console.log('partsOfStr.length ' + partsOfStr.length);
		var highest = 0;
		for (var i = 0; i < partsOfStr.length; i++) {
			if (partsOfStr[i] > highest) {
				highest = partsOfStr[i];
			}
		}
		console.log('highest ' + highest);
		tickOne = highest/3;
		tickTwo = highest*2/3;
		tickThree = highest;
		console.log('tickOne ' + tickOne + ' tickTwo ' + tickTwo + ' tickThree ' + tickThree);
		$scope.splineTickValues = tickOne + "," + tickTwo + "," + tickThree;
	}*/

});
