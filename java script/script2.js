const Time=document.getElementById("current-time");
const stopTime=document.getElementById("stop-time");

let timer;
let isRunning=false;


function showTime(){
    const currTime=new Date();
    let seconds=currTime.getSeconds();
    let Minutes=currTime.getMinutes();
    let hours=currTime.getHours();
    if(seconds < 9){
        seconds="0"+seconds;
    }
    if(Minutes<9){
        Minutes="0"+Minutes;
    }
    if(hours<9){
        hours="0"+hours;
    }
    const time=`${hours}:${Minutes}:${seconds}`;
    const Year=`${currTime.getFullYear()}-${currTime.getMonth()+1}-${currTime.getDate()}`;
    const daysOfWeek= ["Sunday","Monday","Tuesday","Wednsday","Thursday","Friday","Saturday"];
    const Day=daysOfWeek[currTime.getDay()];
    Time.innerText=Year + "\n" + Day + "\n" + time;
}

//start timer
function startTimer(){
    if(!isRunning){
        timer=setInterval(showTime,1000);
        showTime();
        isRunning=true;
        stopTime.innerText="stop timer";
    }
}
startTimer();
function stopTimer(){
    if(isRunning){
        clearInterval(timer);
        isRunning=false;
        stopTime.innerText="start timer"
    }
}

stopTime.addEventListener("click",()=>{
    if(isRunning){
        stopTimer();
    }
    else{
        startTimer();
    }
})






