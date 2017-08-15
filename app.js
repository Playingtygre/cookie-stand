'use strict';

var timeOfDay = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '];
//
var pikestore = {
  location:'1st and Pike',
  min: 23,
  max: 65,
  averageCookies: 6.3,
  cookieArray: [],
  Rdm: function(){
    return Math.floor(Math.random() * (this.max - this.min) + this.min);
  },
  countCookies: function(){
    var totalCookies = 0;
    for (var i = 0; i < 15; i++) {
      var CookiesPerHour = Math.round((this.averageCookies * this.Rdm()));
      this.cookieArray.push(CookiesPerHour);
      totalCookies = (CookiesPerHour + totalCookies);
    }
    this.cookieArray.push(totalCookies);
  },
  salesToPage: function(){
    for (var i = 0; i < timeOfDay.length; i++) {
      var CookieHour = timeOfDay[i] + this.cookieArray[i] + ' cookies';
      var pike = document.getElementById('pike');
      var pikeList = document.createElement('li');
      pikeList.innerText = CookieHour;
      pike.appendChild(pikeList);
    }
  }

};

pikestore.countCookies ();
pikestore.salesToPage();
/////////////////////////
var seatac = {
  location:'SeaTac Airport',
  min: 3,
  max: 24,
  averageCookies: 1.2,
  cookieArray: [],
  Rdm: function(){
    return Math.floor(Math.random() * (this.max - this.min) + this.min);
  },
  countCookies: function(){
    var totalCookies = 0;
    for (var i = 0; i < 15; i++) {
      var CookiesPerHour = Math.round((this.averageCookies * this.Rdm()));
      this.cookieArray.push(CookiesPerHour);
      totalCookies = (CookiesPerHour + totalCookies);
    }
    this.cookieArray.push(totalCookies); },
  salesToPage: function(){
    for (var i = 0; i < timeOfDay.length; i++) {
      var CookieHour = timeOfDay[i] + this.cookieArray[i] + ' cookies';
      var SeattleAir = document.getElementById('seatac');
      var SeaList = document.createElement('li');
      SeaList.innerText = CookieHour;
      SeattleAir.appendChild(SeaList);
    }
  }};

seatac.countCookies ();
seatac.salesToPage();
////////////////////////////////////////////////////////
var SeattleCenter = {
  location:'Seattle Center',
  min: 11,
  max: 38,
  averageCookies: 3.7,
  cookieArray: [],
  Rdm: function(){
    return Math.floor(Math.random() * (this.max - this.min) + this.min);
  },
  countCookies: function(){
    var totalCookies = 0;
    for (var i = 0; i < 15; i++) {
      var CookiesPerHour = Math.round((this.averageCookies * this.Rdm()));
      this.cookieArray.push(CookiesPerHour);
      totalCookies = (CookiesPerHour + totalCookies);
    }
    this.cookieArray.push(totalCookies); },
  salesToPage: function(){
    for (var i = 0; i < timeOfDay.length; i++) {
      var CookieHour = timeOfDay[i] + this.cookieArray[i] + ' cookies';
      var Center = document.getElementById('seattleCenter');
      var CenterList = document.createElement('li');
      CenterList.innerText = CookieHour;
      Center.appendChild(CenterList);
    }
  }};

SeattleCenter.countCookies ();
SeattleCenter.salesToPage();
/////////////////////////////////////////////////
var CapitalHill = {
  location:'Capital Hill',
  min: 20,
  max: 38,
  averageCookies: 2.3,
  cookieArray: [],
  Rdm: function(){
    return Math.floor(Math.random() * (this.max - this.min) + this.min);
  },
  countCookies: function(){
    var totalCookies = 0;
    for (var i = 0; i < 15; i++) {
      var CookiesPerHour = Math.round((this.averageCookies * this.Rdm()));
      this.cookieArray.push(CookiesPerHour);
      totalCookies = (CookiesPerHour + totalCookies);
    }
    this.cookieArray.push(totalCookies); },
  salesToPage: function(){
    for (var i = 0; i < timeOfDay.length; i++) {
      var CookieHour = timeOfDay[i] + this.cookieArray[i] + ' cookies';
      var HillCenter = document.getElementById('capitalHill');
      var HillList = document.createElement('li');
      HillList.innerText = CookieHour;
      HillCenter.appendChild(HillList);
    }
  }};

CapitalHill.countCookies ();
CapitalHill.salesToPage();
////////////////////////
var Alki = {
  location:'alki',
  min: 2,
  max: 16,
  averageCookies: 4.6,
  cookieArray: [],
  Rdm: function(){
    return Math.floor(Math.random() * (this.max - this.min) + this.min);
  },
  countCookies: function(){
    var totalCookies = 0;
    for (var i = 0; i < 15; i++) {
      var CookiesPerHour = Math.round((this.averageCookies * this.Rdm()));
      this.cookieArray.push(CookiesPerHour);
      totalCookies = (CookiesPerHour + totalCookies);
    }
    this.cookieArray.push(totalCookies); },
  salesToPage: function(){
    for (var i = 0; i < timeOfDay.length; i++) {
      var CookieHour = timeOfDay[i] + this.cookieArray[i] + ' cookies';
      var alkiCenter = document.getElementById('alkiStore');
      var AlkiList = document.createElement('li');
      AlkiList.innerText = CookieHour;
      alkiCenter.appendChild(AlkiList);
    }
  }};

Alki.countCookies ();
Alki.salesToPage();
