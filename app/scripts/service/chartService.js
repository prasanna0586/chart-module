'use strict';

angular.module('c3AngularChartApp').service('chartService', function() {
	this.getChartData = function (responseFromWebSocket) {
		var chartObject = new Object();
		if (responseFromWebSocket && responseFromWebSocket.response) {
			var chartArrayofObj = responseFromWebSocket.response.charts;
			var chartID, chartData, chartType, chartAxis, chartXAxis, chartX, chartColumnsObj, label, name, title = 0;
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
						//chartDataObj.x = chartXAxis;
						label = chartXAxis.replace(/"/g, '\\"');
						if (chartType === 'donut') {
							title = title + parseInt(chartAxis[j].nodeValue);
						}
						chartDataObj.x = truncate(label);
						if (chartAxis[j].axis && chartAxis[j].axis.length > 0) {
							for (var k = 0; k < chartAxis[j].axis.length; k++) {
								label = chartAxis[j].axis[k].nodeValue.replace(/"/g, '\\"');
								name = chartAxis[j].axis[k].nodeLabel.replace(/"/g, '\\"');
								chartDataObj["data"+k] = label;		
								chartColumnsObj = createChartColumnObj(name, chartType, "data"+k);				
								columns.push(chartColumnsObj);
							}
						} else {
							label = chartAxis[j].nodeValue.replace(/"/g, '\\"');
							name = chartAxis[j].nodeLabel.replace(/"/g, '\\"');
							chartDataObj["data"+j] = label;	
							chartColumnsObj = createChartColumnObj(name, chartType, "data"+j);
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
			
			if (title) {
				chartObject.title = title;
			}
		}
		return chartObject;
	};
	
	var createChartColumnObj = function (chartAxisLabel, chartType, id) {
		var chartColumnsObj = new Object();
//		var label = chartAxis.nodeLabel;

		chartColumnsObj.id = id;
		chartColumnsObj.type = chartType;
		chartColumnsObj.name = chartAxisLabel;

		return chartColumnsObj;
	};
	
	var truncate = function (label) {
		if (label && label.length > 12) {
			label = label.slice(0,9)+"...";
		}
		return label;
	};
});