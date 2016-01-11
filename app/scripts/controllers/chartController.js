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
	/*$scope.chartData = [{
							"x" : "Furniture",
							"Jul, 2015" : 731132.24,
							"Aug, 2015" : 1331203.64,
							"Sep, 2015" : 1259481.53,
							"Oct, 2015" : 345358.89
						}, {
							"x" : "Office Supplies",
							"Jul, 2015" : 1786809.51,
							"Aug, 2015" : 3040001.18,
							"Sep, 2015" : 2880861.29,
							"Oct, 2015" : 743312.87
						}];*/
	//Columns for bar
	/*$scope.chartColumns = [{"id": "Jul, 2015", "type": "bar", "name": "Jul, 2015"},
	                       {"id": "Aug, 2015", "type": "bar", "name": "Aug, 2015"},
	                       {"id": "Sep, 2015", "type": "bar", "name": "Sep, 2015"},
	                       {"id": "Oct, 2015", "type": "bar", "name": "Oct, 2015"}];*/
	//X axis for bar
	/*$scope.chartX = {"id": "x", "name": "Product Category"};*/

	//response for bar chart with grouping and small dataset
	$scope.responseFromWebSocket = {
			"error": false,
			"statusCode": 200,
			"response": {
				"charts": [{
					"chartData": {
						"nodeValue": null,
						"nodeLabel": "",
						"axisType": "series",
						"axis": [{
							"nodeValue": null,
							"nodeLabel": "Furniture",
							"axisType": "categories",
							"axis": [{
								"nodeValue": "731132.24",
								"nodeLabel": "Jul, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "1331203.64",
								"nodeLabel": "Aug, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "1259481.53",
								"nodeLabel": "Sep, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "345358.89",
								"nodeLabel": "Oct, 2015",
								"axisType": "",
								"axis": []
							}]
						}, {
							"nodeValue": null,
							"nodeLabel": "Office Supplies",
							"axisType": "categories",
							"axis": [{
								"nodeValue": "1786809.51",
								"nodeLabel": "Jul, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "3040001.18",
								"nodeLabel": "Aug, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "2880861.29",
								"nodeLabel": "Sep, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "743312.87",
								"nodeLabel": "Oct, 2015",
								"axisType": "",
								"axis": []
							}]
						}]
					},
					"chartId": "1452532176046",
					"type": "bar"
				}],
				"storyTrackingId": "a5cc1655-8471-444b-8a3f-14313fff7815",
				"queryInternalId": 557837215513660802,
				"requestId": "65202538-8532-49d2-979d-4cd586e56ee2",
				"userId": null,
				"complete": true,
				"progress": 1
			}
		};
	
	//response for bar chart with grouping and huge dataset
	/*$scope.responseFromWebSocket = {
			"error": false,
			"statusCode": 200,
			"response": {
				"charts": [{
					"chartData": {
						"nodeValue": null,
						"nodeLabel": "",
						"axisType": "series",
						"axis": [{
							"nodeValue": null,
							"nodeLabel": "Furniture",
							"axisType": "categories",
							"axis": [{
								"nodeValue": "38444.89",
								"nodeLabel": "Jul 15, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "49598.11",
								"nodeLabel": "Jul 16, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "42926.55",
								"nodeLabel": "Jul 17, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "49426.36",
								"nodeLabel": "Jul 18, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "47650.05",
								"nodeLabel": "Jul 19, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "35639.07",
								"nodeLabel": "Jul 20, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "51939.47",
								"nodeLabel": "Jul 21, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "42341.12",
								"nodeLabel": "Jul 22, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "40029.65",
								"nodeLabel": "Jul 23, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "61952",
								"nodeLabel": "Jul 24, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "38001.11",
								"nodeLabel": "Jul 25, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "34115.09",
								"nodeLabel": "Jul 26, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "36386.06",
								"nodeLabel": "Jul 27, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "47983.16",
								"nodeLabel": "Jul 28, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "49810.15",
								"nodeLabel": "Jul 29, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "22699.64",
								"nodeLabel": "Jul 30, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "42189.76",
								"nodeLabel": "Jul 31, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "38303.83",
								"nodeLabel": "Aug 01, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "22437.11",
								"nodeLabel": "Aug 02, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "47841.9",
								"nodeLabel": "Aug 03, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "64000.94",
								"nodeLabel": "Aug 04, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "38757.8",
								"nodeLabel": "Aug 05, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "38172.47",
								"nodeLabel": "Aug 06, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "49355.78",
								"nodeLabel": "Aug 07, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "40806.94",
								"nodeLabel": "Aug 08, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "33125.96",
								"nodeLabel": "Aug 09, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "35770.43",
								"nodeLabel": "Aug 10, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "41099.56",
								"nodeLabel": "Aug 11, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "42865.97",
								"nodeLabel": "Aug 12, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "48053.94",
								"nodeLabel": "Aug 13, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "53675.79",
								"nodeLabel": "Aug 14, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "35931.98",
								"nodeLabel": "Aug 15, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "40423.24",
								"nodeLabel": "Aug 16, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "49507.14",
								"nodeLabel": "Aug 17, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "51505.59",
								"nodeLabel": "Aug 18, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "60972.97",
								"nodeLabel": "Aug 19, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "62789.87",
								"nodeLabel": "Aug 20, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "24637.6",
								"nodeLabel": "Aug 21, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "40312.38",
								"nodeLabel": "Aug 22, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "43986.06",
								"nodeLabel": "Aug 23, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "32803.05",
								"nodeLabel": "Aug 24, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "44783.54",
								"nodeLabel": "Aug 25, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "35679.55",
								"nodeLabel": "Aug 26, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "26686.34",
								"nodeLabel": "Aug 27, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "33458.97",
								"nodeLabel": "Aug 28, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "62345.69",
								"nodeLabel": "Aug 29, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "42684.22",
								"nodeLabel": "Aug 30, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "48427.04",
								"nodeLabel": "Aug 31, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "43653.15",
								"nodeLabel": "Sep 01, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "53231.61",
								"nodeLabel": "Sep 02, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "24122.84",
								"nodeLabel": "Sep 03, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "39444.31",
								"nodeLabel": "Sep 04, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "51041.41",
								"nodeLabel": "Sep 05, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "45146.94",
								"nodeLabel": "Sep 06, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "53413.16",
								"nodeLabel": "Sep 07, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "42310.82",
								"nodeLabel": "Sep 08, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "34478.49",
								"nodeLabel": "Sep 09, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "36214.51",
								"nodeLabel": "Sep 10, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "36022.76",
								"nodeLabel": "Sep 11, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "48891.31",
								"nodeLabel": "Sep 12, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "47861.99",
								"nodeLabel": "Sep 13, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "59600.35",
								"nodeLabel": "Sep 14, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "53019.77",
								"nodeLabel": "Sep 15, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "35911.79",
								"nodeLabel": "Sep 16, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "39343.54",
								"nodeLabel": "Sep 17, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "40534.21",
								"nodeLabel": "Sep 18, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "30975.95",
								"nodeLabel": "Sep 19, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "34680.23",
								"nodeLabel": "Sep 20, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "41866.55",
								"nodeLabel": "Sep 21, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "37213.53",
								"nodeLabel": "Sep 22, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "46459.08",
								"nodeLabel": "Sep 23, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "35255.57",
								"nodeLabel": "Sep 24, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "27584.79",
								"nodeLabel": "Sep 25, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "46287.53",
								"nodeLabel": "Sep 26, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "51172.68",
								"nodeLabel": "Sep 27, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "31531",
								"nodeLabel": "Sep 28, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "48719.96",
								"nodeLabel": "Sep 29, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "43491.7",
								"nodeLabel": "Sep 30, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "41412.47",
								"nodeLabel": "Oct 01, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "53221.31",
								"nodeLabel": "Oct 02, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "48598.69",
								"nodeLabel": "Oct 03, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "46307.82",
								"nodeLabel": "Oct 04, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "53181.12",
								"nodeLabel": "Oct 05, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "45944.02",
								"nodeLabel": "Oct 06, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "33176.34",
								"nodeLabel": "Oct 07, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "23517.11",
								"nodeLabel": "Oct 08, 2015",
								"axisType": "",
								"axis": []
							}]
						}, {
							"nodeValue": null,
							"nodeLabel": "Office Supplies",
							"axisType": "categories",
							"axis": [{
								"nodeValue": "105302.44",
								"nodeLabel": "Jul 15, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "113478.08",
								"nodeLabel": "Jul 16, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "109682.93",
								"nodeLabel": "Jul 17, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "124469.55",
								"nodeLabel": "Jul 18, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "121511.97",
								"nodeLabel": "Jul 19, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "110833.41",
								"nodeLabel": "Jul 20, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "96793.59",
								"nodeLabel": "Jul 21, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "74992.4",
								"nodeLabel": "Jul 22, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "105544.57",
								"nodeLabel": "Jul 23, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "99811.76",
								"nodeLabel": "Jul 24, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "88971.25",
								"nodeLabel": "Jul 25, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "102668.17",
								"nodeLabel": "Jul 26, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "118272.16",
								"nodeLabel": "Jul 27, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "102567.3",
								"nodeLabel": "Jul 28, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "107583.41",
								"nodeLabel": "Jul 29, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "114123.81",
								"nodeLabel": "Jul 30, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "90202.71",
								"nodeLabel": "Jul 31, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "103455.45",
								"nodeLabel": "Aug 01, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "114577.88",
								"nodeLabel": "Aug 02, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "100477.97",
								"nodeLabel": "Aug 03, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "121047.9",
								"nodeLabel": "Aug 04, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "95996.41",
								"nodeLabel": "Aug 05, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "95320",
								"nodeLabel": "Aug 06, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "95420.97",
								"nodeLabel": "Aug 07, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "82693.48",
								"nodeLabel": "Aug 08, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "109874.28",
								"nodeLabel": "Aug 09, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "95703.49",
								"nodeLabel": "Aug 10, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "89354.84",
								"nodeLabel": "Aug 11, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "105867.48",
								"nodeLabel": "Aug 12, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "114890.9",
								"nodeLabel": "Aug 13, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "97247.96",
								"nodeLabel": "Aug 14, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "90031.25",
								"nodeLabel": "Aug 15, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "80876.88",
								"nodeLabel": "Aug 16, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "112862.05",
								"nodeLabel": "Aug 17, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "77031.34",
								"nodeLabel": "Aug 18, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "106180.3",
								"nodeLabel": "Aug 19, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "87931.73",
								"nodeLabel": "Aug 20, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "110631.47",
								"nodeLabel": "Aug 21, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "103849.24",
								"nodeLabel": "Aug 22, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "99408.47",
								"nodeLabel": "Aug 23, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "101830.2",
								"nodeLabel": "Aug 24, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "89536.89",
								"nodeLabel": "Aug 25, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "89627.67",
								"nodeLabel": "Aug 26, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "109349.92",
								"nodeLabel": "Aug 27, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "82683.58",
								"nodeLabel": "Aug 28, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "105807.2",
								"nodeLabel": "Aug 29, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "79463.77",
								"nodeLabel": "Aug 30, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "90970.2",
								"nodeLabel": "Aug 31, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "106604.58",
								"nodeLabel": "Sep 01, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "97621.56",
								"nodeLabel": "Sep 02, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "87901.64",
								"nodeLabel": "Sep 03, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "111106.04",
								"nodeLabel": "Sep 04, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "103990.3",
								"nodeLabel": "Sep 05, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "90960.1",
								"nodeLabel": "Sep 06, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "92090.09",
								"nodeLabel": "Sep 07, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "98580",
								"nodeLabel": "Sep 08, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "74729.98",
								"nodeLabel": "Sep 09, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "116192.84",
								"nodeLabel": "Sep 10, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "117273.14",
								"nodeLabel": "Sep 11, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "77808.53",
								"nodeLabel": "Sep 12, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "83460.47",
								"nodeLabel": "Sep 13, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "101002.63",
								"nodeLabel": "Sep 14, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "102234.29",
								"nodeLabel": "Sep 15, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "99094.85",
								"nodeLabel": "Sep 16, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "102011.95",
								"nodeLabel": "Sep 17, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "83137.56",
								"nodeLabel": "Sep 18, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "72842.4",
								"nodeLabel": "Sep 19, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "72226.97",
								"nodeLabel": "Sep 20, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "88517.37",
								"nodeLabel": "Sep 21, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "106957.88",
								"nodeLabel": "Sep 22, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "95098.16",
								"nodeLabel": "Sep 23, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "103112.14",
								"nodeLabel": "Sep 24, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "88588.15",
								"nodeLabel": "Sep 25, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "102445.83",
								"nodeLabel": "Sep 26, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "99892.53",
								"nodeLabel": "Sep 27, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "139144.4",
								"nodeLabel": "Sep 28, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "75234.64",
								"nodeLabel": "Sep 29, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "91000.29",
								"nodeLabel": "Sep 30, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "89173.39",
								"nodeLabel": "Oct 01, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "87194.94",
								"nodeLabel": "Oct 02, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "121592.64",
								"nodeLabel": "Oct 03, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "76284.45",
								"nodeLabel": "Oct 04, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "91938.83",
								"nodeLabel": "Oct 05, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "106826.32",
								"nodeLabel": "Oct 06, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "89566.78",
								"nodeLabel": "Oct 07, 2015",
								"axisType": "",
								"axis": []
							}, {
								"nodeValue": "80735.52",
								"nodeLabel": "Oct 08, 2015",
								"axisType": "",
								"axis": []
							}]
						}]
					},
					"chartId": "1452532176046",
					"type": "bar"
				}],
				"storyTrackingId": "a5cc1655-8471-444b-8a3f-14313fff7815",
				"queryInternalId": -5730579040882897710,
				"requestId": "21136cd8-27d3-4df2-8175-e8cc4829e486",
				"userId": null,
				"complete": true,
				"progress": 1
			}
	};*/
	
	//response for bar chart without grouping
	/*$scope.responseFromWebSocket = {
			"error": false,
			"statusCode": 200,
			"response": {
				"charts": [{
					"chartData": {
						"nodeValue": null,
						"nodeLabel": "",
						"axisType": "categories",
						"axis": [{
							"nodeValue": "3667176.3",
							"nodeLabel": "Furniture",
							"axisType": "",
							"axis": []
						}, {
							"nodeValue": "8450984.85",
							"nodeLabel": "Office Supplies",
							"axisType": "",
							"axis": []
						}]
					},
					"chartId": "1452532176046",
					"type": "bar"
				}],
				"storyTrackingId": "a5cc1655-8471-444b-8a3f-14313fff7815",
				"queryInternalId": 8969159062972811942,
				"requestId": "48bf8633-dacc-467c-bf12-cc8e51a03c73",
				"userId": null,
				"complete": true,
				"progress": 1
			}
	};*/

	$scope.onChartLoad = function () {
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
	};

	$scope.onChartLoad();
});
