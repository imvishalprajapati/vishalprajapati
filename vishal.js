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
function whishes()
{
    var din=new Date();
    var samay=din.getHours();
    var greet;
    if(samay<12)
        {
            greet="Good morning";
        }
    else if(samay>=12 && samay<17)
        {
            greet="Good afternoon";
        }
    else if(samay>=17 && samay<=20)
        {
            greet="Good Evening";
        }
    else{
            greet="Good Night";
        }
    document.getElementById('wish').innerHTML =
        '<b>' + greet + '</b> and welcome to Encodedna.com!';
    whishes();
}