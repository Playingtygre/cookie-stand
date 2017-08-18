'use strict';

var timeOfDay = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '];
var stores = [];

//Object  for stores //
function StorePlace (maxCust, minCust, avgCookie, location){
  this.maxCust = maxCust;
  this.minCust = minCust;
  this.avgCookie = avgCookie;
  this.location = location;
  this.averageCookies = [];
  this.totalCookies = 0;
  stores.push(this);
  this.getRandom = function (min, max) {
    return Math.floor(Math.random() * this.maxCust) + this.minCust;
  };

////method for accessing random cookie counter //
  this.cookiefunction = function(){
    for (var i = 0; i < (timeOfDay.length - 1); i++) {
      var cookieHr =  Math.floor(this.getRandom() * this.avgCookie);
      this.averageCookies.push(cookieHr);
      this.totalCookies += cookieHr;
    }
  };
}

////spreadsheet tablebox - table - thead - tr - td//////
var createTable = function(store) {
  var tableDiv = document.getElementById('tableBox');
  var tableBox = document.createElement('table');
  var tableHead = document.createElement('thead');
  var tableRow = document.createElement('tr');
  var tableData = document.createElement('td');
  tableData.innerText = '';
  tableRow.appendChild(tableData);
  for (var i = 0; i < timeOfDay.length; i++){
    var thEl = document.createElement('th');
    thEl.innerText = timeOfDay[i];
    tableRow.appendChild(thEl);
  };
  /////calls table head with looping for length of time///
  tableHead.appendChild(tableRow);
  tableBox.appendChild(tableHead);
  var tableBody = document.createElement('tbody');
  for (i = 0; i < stores.length; i++) {
    tableRow = document.createElement('tr');
    tableData = document.createElement('td');
    tableData.innerText = stores[i].location;
    tableRow.appendChild(tableData);
    for (var j = 0; j < timeOfDay.length; j++){
      tableData = document.createElement('td');
      tableData.innerText = stores[i].averageCookies[j];
      tableRow.appendChild(tableData);
    }
    var tableColumn = document.createElement('td');
    tableColumn.innerText = store[i].totalCookies;
    tableRow.appendChild(tableColumn);

    tableBody.appendChild(tableRow);
  }
  tableBox.appendChild(tableBody);
  tableDiv.appendChild(tableBox);
};
console.log('hello');

//totals box//// needs to pull data from all other hours and adds them

var totalbox = function(store){
  for ( var i = 0; i < store.length; i++){
    var tableColumn = document.createElement('td');
    tableColumn.innerText = store[i].totalCookies;
    tableData.appendChild('tableColumn');
  }
};
// console.log('hello')

new StorePlace (65, 23, 6.3, '1st and Pike');
new StorePlace (24, 3, 1.2, 'SeaTac Airport');
new StorePlace (38, 11, 3.7, 'Seattle Center');
new StorePlace (38, 20, 2.3, 'Capital Hill');
new StorePlace (16, 2, 4.6, 'Alki');

//calls the cookie method
for (var k = 0; k < stores.length; k++){
  stores[k].cookiefunction();
  console.log('hello');
};

///all creat tables must be at the end///
createTable(stores);

////Even Listeners////wanting tod perform thank you!
submit.addEventListener('click', myFunction);

function myFunction() {
  alert ('Thank you Pat for submitting');
};
////input the submit button to input data onto the rows
function myCreateFunction() {
    var table = document.getElementById("td");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
};

function myDeleteFunction() {
    document.getElementById('td').deleteRow(0);

/////
// fucntion(putting arugments in fuction)
// var row = table.insertRow ()
// creat a for looop//
//
// event.preventdefult();
