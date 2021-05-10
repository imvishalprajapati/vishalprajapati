function great(){
    let a=new Date();
    let b=a.getHours();
    if(b>=03 && b<=12)
    {
        document.getElementById("greating").innerHTML = 'Good Morning';

    }
   else if(b>=12 && b<=16){
        document.getElementById("greating").innerHTML = 'Goog Afternoon';

    }
    else if(b>=16 && b<=20){
        document.getElementById("greating").innerHTML ='Good Evening' ;
    }
    else{
        document.getElementById("greating").innerHTML ='Good Night';
    }
}