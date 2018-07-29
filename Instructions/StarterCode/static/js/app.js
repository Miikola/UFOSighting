// from data.js
var tableData = data;
// Get a reference to the table body
var tbody = d3.select("tbody");
// YOUR CODE HERE!

// //  Use d3 to update each cell's text 
data.forEach(function(weatherReport) {
    console.log(weatherReport);
    var row = tbody.append("tr");
    Object.entries(weatherReport).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

// Select the submit button
var filter = d3.select("#filter-btn");
filter.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

 //udpate cell text value with report values
 filteredData.forEach((filteredData) => {
    var row = tbody.append("tr");
    Object.entries(filteredData).forEach(([key, value])=>{
        var cell = tbody.append("td");
        cell.text(value);
    });
 });
 });

