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

/*//this places speadsheet data in to
var headerTop = function(){
  var anchor = document.getElementById('tableBox');
  var salesBox = document.createElement('table');
  anchor.appendChild(salesBox);
  var headerRow = document.createElement('thead');
  salesBox.appendChild(headerRow);
  var lefcells = document.createElement('th');
  headerRow.appendChild(lefcells);
  for (var i = 0; i < timeOfDay.length; i++){
    var time = document.createElement('th');
    time.innerText = (timeOfDay[i]);
    headerRow.appendChild(time);
  };
};

var headerRow = document.createElement('thead');

//attempt to place boxes in
var salesTable = document.getElementById('th');
var salesC = document.createElement('tr');
salesC.innerText = ('hello');
headerRow.appendChild(salesC);

salesTable;
/*= function (){
  var tableRow = doucument.getElementById('tr');
  var salesRow = doucument.createElement('td');
  headerTop.innerText = [];
  tableRow.appendChild(salesRow);
  innterText();
};
//   tableRow.appendChild(salesRow);
//
// var tableRow = document.getElementById('td');
// var salesBox1 = document.createElement('tr');
//
// table.appendChild
// var mainRow = function(){
//   var anchor1 = document.getElementById('td');
//   var salesBox1 = document.createElement('tr')
// //  var anchor1 = document.getElementById('tableBox');
// //  var table = document.createElement('table');
// //  anchor.appendChild(table);
//   var store = document.createElement('tr');
//   table.appendChild(store);
//   var leftboxes = document.createElement('th');
//   tableRow.appendChild(leftboxes);
//   for (var i = 0; i < timeOfDay.length; i++){
//     var time1 = document.createElement('th');
//     time.innerText = (store);
//     headerRow.appendChild(time1);
//   };
// };
*/
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

// var table = document.createElement('tr');
// document.body.appendChild(ul)
//
// /document.getElementById('tr')
// /var store1 = document.createElement('tr');
//
// store.push(store1);
//
// var table = document.getElementById('table')
//   var storeArray = [];
//
//
//   for (i = 0, i < storeArray.length; i++) {
//     var row = document.createElement('tr')
//       for (j = 0; j < hours.length, j++)
//       var td = doucument.createElement('td')
//       td.innerText = storeArray[i].sales[j];
//       row.appendChild(td)
//   }
//
//   table.appendChild(row)
//
//
//
// target an elment table with Id  get elemnt by id
// append elment with data
// append to table head
// set table head
// // document.getElementById('6am').innerHTML = store1.getRandom();
// // document.getElementById('7am').innerHTML = store1.getRandom();
// // document.getElementById('8am').innerHTML = store1.getRandom();
// // document.getElementById('9am').innerHTML = store1.getRandom();
// // document.getElementById('10am').innerHTML = store1.getRandom();
// // document.getElementById('11am').innerHTML = store1.getRandom();
// // document.getElementById('12pm').innerHTML = store1.getRandom();
// // document.getElementById('1pm').innerHTML = store1.getRandom();
// // document.getElementById('2pm').innerHTML = store1.getRandom();
// // document.getElementById('3pm').innerHTML = store1.getRandom();
// // document.getElementById('4pm').innerHTML = store1.getRandom();
// // document.getElementById('5pm').innerHTML = store1.getRandom();
// // document.getElementById('6pm').innerHTML = store1.getRandom();
// // document.getElementById('7pm').innerHTML = store1.getRandom();
//
// //random number store1.getRandom();
// /////////////////////////////////////////////////////////
// /*var Alki = {
//   location:'alki',
//   min: 2,
//   max: 16,
//   averageCookies: 4.6,
//   cookieArray: [],
//   Rdm: function(){
//     return Math.floor(Math.random() * (this.max - this.min) + this.min);
//   },
//   countCookies: function(){
//     var totalCookies = 0;
//     for (var i = 0; i < 15; i++) {
//       var CookiesPerHour = Math.round((this.averageCookies * this.Rdm()));
//       this.cookieArray.push(CookiesPerHour);
//       totalCookies = (CookiesPerHour + totalCookies);
//     }
//     this.cookieArray.push(totalCookies); },
//   salesToPage: function(){
//     for (var i = 0; i < timeOfDay.length; i++) {
//       var CookieHour = timeOfDay[i] + this.cookieArray[i] + ' cookies';
//       var alkiCenter = document.getElementById('alkiStore');
//       var AlkiList = document.createElement('li');
//       AlkiList.innerText = CookieHour;
//       alkiCenter.appendChild(AlkiList);
//     }
//   }};
//
// Alki.countCookies ();
// Alki.salesToPage();*/
