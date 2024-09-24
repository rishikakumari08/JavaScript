const bgColor=document.querySelector(".color-theme")
const start=document.querySelector("#start")
const stop=document.querySelector("#stop")

function randomColor(){
    const hex="0123456789ABCDEF"
    let color="#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)]
        
        // console.log(color);
        
    }
    return color;
}

// console.log(randomColor());
let intervalId;

function changeColor(){
    bgColor.style.backgroundColor=randomColor()
};

function startChangingColor(){
    if(!intervalId)
   {intervalId= setInterval(changeColor,1000)}
}

function stopChaningColor(){
   clearInterval(intervalId)
   //so that the intervalId will not be overwrite we set it to null
   intervalId=null;
}

start.addEventListener('click',startChangingColor)
stop.addEventListener('click',stopChaningColor) 