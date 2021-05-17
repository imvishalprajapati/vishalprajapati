var myDate = new Date();
var hrs = myDate.getHours();
var greet;
if (hrs < 12)
    greet = 'Good Morning';
else if (hrs >= 12 && hrs < 17)
    greet = 'Good Afternoon';
else if (hrs >= 17 && hrs <21)
    greet = 'Good Evening';
else{
    greet= 'Have a Good Night'
}
document.getElementById('wish').innerHTML =
     greet + ' and welcome to my Portfolio';
