// Get the current date and time
var date = new Date();

// Get the hours, minutes, and seconds
var hours = date.getHours();
var minutes = date.getMinutes();
var currentTime = '{' +hours+ ':' +minutes+ '}';

var el = document.getElementById('time');
el.textContent = currentTime;
