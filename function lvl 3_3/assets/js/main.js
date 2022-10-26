function changeBackground(event) {
    event.preventDefault;

    const redString = document.getElementById("rangeRed").value;
    const red = parseInt(redString);
    console.log(red);

    const greenString = document.getElementById("rangeGreen").value;
    const green = parseInt(greenString);
    console.log(green);

    const blueString = document.getElementById("rangeBlue").value;
    const blue = parseInt(blueString);
    console.log(blue);

    document.getElementById("bg").style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    console.log(document.getElementById("bg").style.backgroundColor);
}