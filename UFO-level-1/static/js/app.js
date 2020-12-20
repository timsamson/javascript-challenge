// from data.js
var tableData = data;

// Select table body
var tbody = d3.select("tbody");

// UFO Sighting values
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);

//Create row for each data set
    var row = tbody.append("tr");

//Insert Cell Values
    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
  });

  //Select button
  var button = d3.select("#filter-btn");
    button.on("click", function() {

    tbody.html("");

    // Select the input date
    var input = d3.select("#datetime");

    // Get the input date
    var inputValue = input.property("value");
    console.log(inputValue);

    // Filter Data
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    // console.log filter values
    console.log(filteredData);

    filteredData.forEach(function(selections) {

        console.log(selections);
        // Append one table row `tr` for each sighting
        var row = tbody.append("tr");

        Object.entries(selections).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
    });

