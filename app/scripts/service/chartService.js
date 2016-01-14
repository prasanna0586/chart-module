'use strict';

angular.module('c3AngularChartApp').service('chartService', function() {
	this.getChartData = function (responseFromWebSocket) {
		var chartObject = new Object();
		if (responseFromWebSocket && responseFromWebSocket.response) {
			var chartArrayofObj = responseFromWebSocket.response.charts;
			var chartID, chartData, chartType, chartAxis, chartXAxis, chartX, chartColumnsObj;
			var data = new Array();
			var columns = new Array();
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
								chartColumnsObj = createChartColumnObj(chartAxis[j].axis[k], chartType);				
								columns.push(chartColumnsObj);
							}
						} else {
							chartDataObj[chartAxis[j].nodeLabel] = chartAxis[j].nodeValue;	
							chartColumnsObj = createChartColumnObj(chartAxis[j], chartType);
							columns.push(chartColumnsObj);
						}
						data.push(chartDataObj);
					}
				}
				if (chartType !== "donut") {
					chartX = {"id": "x"};
				}
			}
			chartObject.data = data;
			chartObject.columns = columns;
			if (chartX) {
				chartObject.xAxis = chartX;
			}
		}
		return chartObject;
	};
	
	var createChartColumnObj = function (chartAxis, chartType) {
		var chartColumnsObj = new Object();
		var label = chartAxis.nodeLabel;

		chartColumnsObj.id = label;
		chartColumnsObj.type = chartType;
		chartColumnsObj.name = label;

		return chartColumnsObj;
	};
});