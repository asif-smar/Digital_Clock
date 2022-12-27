function time(){
    d=new Date();
    hour=d.getHours();
    minute=d.getMinutes();
    second=d.getSeconds();

    if(hour>12){
        hrs=hour-12;
    }
    if(hrs<10){
        ht="0"+hrs;
    }
    if(minute<10){
        minute="0"+minute;
    }
    if(second<10){
        second="0"+second;
    }


    meridian=hour<12?"AM":"PM";
    t=hrs+":"+minute+":"+second+meridian;
    document.getElementById('time').innerText=t;

}

setInterval(time,1000);