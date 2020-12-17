// from data.js
var tableData = data;
var tblColumns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]
// Refereces
var tbody = d3.select("tbody");
var btnSearch = d3.select("#btnSearch");
var btnReset = d3.select("#btnReset");

var searchDate = d3.select("#searchDate");
var searchCity = d3.select("#searchCity");
var searchState = d3.select("#searchState");
var searchCountry = d3.select("#searchCountry");
var searchShape = d3.select("#searchShape");

//insert serach function here

var loadTableRows = (whichData) => { 

    tbody.html("");
	
	whichData.forEach(dataRow => { 
		var tblRow = tbody.append("tr");  
		tblColumns.forEach(column => tblRow.append("td").text(dataRow[column]))
	});
}

loadTableRows(tableData);

//


