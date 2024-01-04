var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 15) {
  greeting = 'Good Evening';
} else if (hourNow > 11) {
    greeting = 'Good Afternoon';
} else if (hourNow > 0) {
    greeting = 'Good Morning';
} else {
    greeting = 'Discover Me!';
}
document.write('<h3>' +greeting+ '</h3>');


