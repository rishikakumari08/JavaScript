const button=document.getElementById("location-button");
//current location
function gotLocation(position){
    console.log(position);
}
function failToGetLocation(){
    console.log("Loation is not found");
}
button.addEventListener("click",async()=>{
  navigator.geolocation.getCurrentPosition(gotLocation,failToGetLocation)
})