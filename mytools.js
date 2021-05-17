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
