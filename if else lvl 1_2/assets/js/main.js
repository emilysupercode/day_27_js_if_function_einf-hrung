function weatherReport(event) {
    event.preventDefault();
    console.log("test");

    const ratingString = document.getElementById("rating").value;
    const ratingNumber = parseInt(ratingString);

    console.log(ratingNumber);

    let output = "";

    if (ratingNumber >= 0 && ratingNumber < 3) {
        output = "you'll be needing those wellies";
    } else if (ratingNumber > 2 && ratingNumber <= 5) {
        output = "could be worse";
    } else if (ratingNumber >= 6 && ratingNumber <= 7) {
        output = "pack your sunglasses";
    } else if (ratingNumber >= 8 && ratingNumber <= 10) {
        output = "whatever SPF you've packed isn't high enough";
    }

    document.getElementById("output").innerHTML = output;
}




