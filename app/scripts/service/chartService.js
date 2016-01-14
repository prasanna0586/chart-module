'use strict';

angular.module('c3AngularChartApp').service('chartService', function() {
	this.getWSResponse = function () {
		return response;
	};
	
	this.getChartData = function (responseFromWebSocket) {
		var chartObject = new Object();
		if (responseFromWebSocket && responseFromWebSocket.response) {
			var chartArrayofObj = responseFromWebSocket.response.charts;
			var chartID, chartData, chartType, chartAxis, chartXAxis, chartX;
			var data = new Array();
			var chartColumns = new Array();
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
								var chartColumnsObj = createChartColumnObj(chartAxis[j].axis[k], chartType);				
								chartColumns.push(chartColumnsObj);
							}
						} else {
							chartDataObj[chartAxis[j].nodeLabel] = chartAxis[j].nodeValue;	
							var chartColumnsObj = createChartColumnObj(chartAxis[j], chartType);
							chartColumns.push(chartColumnsObj);
						}
						data.push(chartDataObj);
					}
				}
				if (chartType != "donut") {
					chartX = {"id": "x"};
				}
			}
			chartObject.data = data;
			chartObject.columns = chartColumns;
			if (chartX) {
				chartObject.xAxis = chartX;
			}
		}
		return chartObject;
	};
	
	var createChartColumnObj = function (chartAxis, chartType) {
		var chartColumnsObj = new Object();
		var label = chartAxis.nodeLabel;
		var value = chartAxis.nodeValue;

		chartColumnsObj.id = label;
		chartColumnsObj.type = chartType;
		chartColumnsObj.name = label;

		return chartColumnsObj;
	};
	
	var response = {
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
});