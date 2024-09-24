// first way
function handleClickButton(){
    console.log("Hey there")
}
const el = document.getElementById("Clickbutton");
el.addEventListener('click', function() {
    console.log("I am clicked");
});

//third way -> most preffered way
el.addEventListener('click',handleClickButton);
const para=document.getElementById("para")

el.addEventListener('click',()=>{
    if(para.style.color==='red'){
        para.style.color='blue';
    }
    else{
        para.style.color='red';
    }
})

//remove any element of body by clicking
const allChildren = document.querySelector("body").children;

// for (let i = 0; i < allChildren.length; i++) {
//     allChildren[i].addEventListener("click", function(event) {
//         event.stopPropagation(); // Prevents the event from bubbling up
//         console.log("clicked element",this.tagName)
//         this.remove();
//     });
// }

//creating an element daynamically
const block=document.getElementById("block");
el.addEventListener('click',()=>{
    const ele=document.createElement("h2");
    ele.innerText="Rishika";
    block.appendChild(ele);
    // block.innerHTML="<h1>Rishika Oberoi</h1>"//it is resetting the element and wiped out all the previous element present in blcok 
    

})