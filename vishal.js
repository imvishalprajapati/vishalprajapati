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
function whishes(){
    var din=new Date();
    var samay=din.getHours();
    document.getElementById('wish').innerHTML=samay;
    if(samay>1 && samay<=11)
        {
            document.getElementById('wish').innerHTML='good morning';
        }
    else if(samay>=12 && samay<17)
        {
            document.getElementById('wish').innerHTML='Good Afternoon';
        }
    else if(samay>=17 && samay<=21)
        {
            document.getElementById('wish').innerHTML='Good evening';
        }
    else{
            document.getElementById('wish').innerHTML='Good Night';
        }
        whishes();
    }
