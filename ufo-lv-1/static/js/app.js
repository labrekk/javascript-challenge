// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the alien sighting data from data.js
// console.log(data);

data.forEach(function(aliens) {
  console.log(aliens) });

// Step 2:  Use d3 to append one table row `tr` for each alien sighting  object

data.forEach(function(aliens) {
  console.log(aliens);
  var row = tbody.append("tr");

  Object.entries(aliens).forEach(function([key, value]) {
    // console.log(key, value);
        // Append a cell to the row for each value
    var cell = row.append("td");
    cell.text(value);
  });
});

// filter-btn

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter () {
  d3.event.preventDefault();

  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Print the value to the console
  console.log(inputValue);

  var inputData = tableData.filter(tableData => tableData.datetime === inputValue);
  console.log(inputData);

  inputData.forEach(function(aliens) {
    var tbody = d3.select('tbody');
    var trow = tbody.append('tr');
    Object.entries(aliens).forEach(function([key,value]) {
      var cell = row.append('td');

      cell.text(value);

    });
  });
}

