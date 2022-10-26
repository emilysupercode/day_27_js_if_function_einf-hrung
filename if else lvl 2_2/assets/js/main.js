function visualizeWarning(value) {
    // event.preventDefault;

    // const xString = document.getElementById("rangeValue").x;
    // const x = parseInt(xString);

    x = value;

    document.getElementById("aqiValue").innerHTML = "AQI: " + x;


    if (value <= 50) {
        document.getElementById("healthConcern").innerHTML = "Good";
        document.getElementById("healthEffect").innerHTML = "Little or no risk";
        document.getElementById("bg").style.backgroundColor = "green";
    } else if (x > 50 && x <= 100) {
        document.getElementById("healthConcern").innerHTML = "Moderate";
        document.getElementById("healthEffect").innerHTML = "Acceptable quality";
        document.getElementById("bg").style.backgroundColor = "yellow";
    } else if (x > 100 && x <= 150) {
        document.getElementById("healthConcern").innerHTML = "Unhealthy for sensitive groups";
        document.getElementById("healthEffect").innerHTML = "General public not likely affected";
        document.getElementById("bg").style.backgroundColor = "red";
    }

}