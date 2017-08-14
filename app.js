'use strictly';

prompt('hello');

//for (var j =0; j < 15; j++) {
//console.log(j);
// }
//1st and pike min & max
var store1 = {
  location: '1st and Pike',
  max:23,
  min:65,
  averageCookies:6.3,

};
//seatac Airport store min & max
var store2 = {
  location: 'SeaTac Airport',
  max:3,
  min:24,
  averageCookies:1.2,
};

// seattle center store min & max
var store3 = {
  location: 'Seattle Center',
  max:11,
  min:38,
  averageCookies:3.7,
};

// capital hilll store min & max
var store4 = {
  location: 'Capitol Hill',
  max:20,
  min:38,
  averageCookies:2.3
};

//alki store min & max
var store5 = {
  location:'Alki',
  max:16,
  min:2,
  averageCookies:4.6,
};

store5.min;

//
function getRandomInt(min, max) {
  //min = Math.ceil(store5.min);
  //max = Math.floor(store5.max);
  return Math.floor(Math.random() * (max - min)) + min;
}

Math.floor(Math.random() * 10);
store5['hourlySales'] = Math.floor(Math.random() * 10);
getRandomInt(store5.min, store5.max);

var el = document.getElementById('pike');
var listTag = document.createElement('li');
listTag.innerHTML = store1.min;
el.appendChild(listTag);

var body = document.ElementsByTagName('body')[0];
var allStores = [store1, store2, store3, store4, store5];
var newTable = document.createElement('table');
body.appendChild(newTable);
