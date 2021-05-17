//my tools area
function mytools(){
    var a = document.getElementById('km').value;
    var b = Math.round(a*0.621371);
    if(a=="" || a<=0)
    {
        alert("Please enter a Valid Value")
    }
    else{
    document.getElementById('miles').innerHTML=b+ ' Miles';
    }
    mytools();
}


// greating  area
var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12)
    greet = 'Good Morning';
else if (hrs >= 12 && hrs <= 17)
    greet = 'Good Afternoon';
else if (hrs >= 17 && hrs <= 24)
    greet = 'Good Evening';

document.getElementById('wish').innerHTML =
    '<b>' + greet + '</b> and welcome to Encodedna.com!';
    