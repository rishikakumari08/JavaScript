const form = document.querySelector("form");

form.addEventListener('submit', (val) => {
    val.preventDefault();

    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("Weight").value); // Fix typo: documen -> document
    const results = document.getElementById("results");

    if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = "Please enter a valid height.";
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please enter a valid weight.";
    } else {
        // Calculate BMI
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        results.innerHTML = `Your BMI is ${bmi}`;
    }
});
