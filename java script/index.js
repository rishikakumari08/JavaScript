const el = document.getElementById("search-button");
const input = document.getElementById("city-name");
const city_Name=document.getElementById("cityName");
const cityTime=document.getElementById("cityTime");
const cityTemp=document.getElementById("citytemp")
const Place=document.getElementById("place");

async function getData(cityName) {
    const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=bf3cbe38e8894780be161146242108&q=${cityName}&aqi=yes`);
    return await data.json();
}

el.addEventListener("click", async (event) => {
    event.preventDefault(); // Prevent form submission and page reload
    const value = input.value;
    const result = await getData(value);
    console.log(result);
    city_Name.innerText=`${result.location.name},${result.location.region},${result.location.country}`;
    cityTime.innerText=`${result.location.localtime}`;
    const temperature = `${result.current.temp_c}`;
    cityTemp.innerText=`${temperature}°C`;
    if (temperature > 20) {
        cityTemp.innerText += " ☀️";
    } else if (temperature >= 10 && temperature <= 20) {
        cityTemp.innerText += " ☁️";
    } else {
        cityTemp.innerText += " 🌡️";
    }  
});

el.addEventListener("click",()=>{
    const value = input.value;
    localStorage.setItem("City-Name",value);
    location.reload();//this will add the name of place as you click the button 
})

window.addEventListener("load", () => {
    const value = localStorage.getItem("City-Name");
    if (Place) {
        Place.innerText += ' '+ value;
    } else {
        console.error("Element with ID 'place' not found.");
    }
});