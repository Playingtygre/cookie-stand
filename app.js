'use strict';

var timeOfDay = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '];
var stores = [];

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

  this.cookiefunction = function(){
    for (var i = 0; i < (timeOfDay.length - 1); i++) {
      var cookieHr =  Math.floor(this.getRandom() * this.avgCookie);
      this.averageCookies.push(cookieHr);
      this.totalCookies += cookieHr;
    }
  };
}

var createTable = function() {
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
  }
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
    tableBody.appendChild(tableRow);
  }
  tableBox.appendChild(tableBody);
  tableDiv.appendChild(tableBox);
};

dChild(time1);

new StorePlace (65, 23, 6.3, '1st and Pike');
new StorePlace (24, 3, 1.2, 'SeaTac Airport');
new StorePlace (38, 11, 3.7, 'Seattle Center');
new StorePlace (38, 20, 2.3, 'Capital Hill');
new StorePlace (16, 2, 4.6, 'Alki');

for (var k = 0; k < stores.length; k++){
  stores[k].cookiefunction();
  console.log('hello');
}

createTable();
