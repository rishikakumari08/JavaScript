// Get all the color-box buttons
const buttons = document.querySelectorAll('.color-box');


const colorBg=document.querySelector(".color-theme")

buttons.forEach((button)=>{
    console.log(button); 
    button.addEventListener('click',(color)=>{
     console.log(color);
     console.log(color.target);
     if (color.target.id === "grey"){
        colorBg.style.backgroundColor="grey";
     }
     if (color.target.id === "red"){
        colorBg.style.backgroundColor="red";
     }
     if (color.target.id === "yellow"){
        colorBg.style.backgroundColor="yellow";
     }
     if (color.target.id === "green"){
        colorBg.style.backgroundColor="green";
     }

    })
    
})
