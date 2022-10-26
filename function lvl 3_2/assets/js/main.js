function changeFontsSize(event) {
    event.preventDefault;
    const xString = document.getElementById("range").value;
    const x = parseInt(xString);

    document.getElementById("test").style.fontSize = x + "px";
    console.log(x + "px");

    const input = document.getElementById("text").value;

    document.getElementById("test").innerHTML = input;

    const font = document.getElementById("fontName").value;
    console.log(font);

    if (font === "1") {
        document.getElementById("test").style.fontFamily = "BodoniModa-Regular";
    } else if (font === "2") {
        document.getElementById("test").style.fontFamily = "OpenSans-Regular";
    } else if (font === "3") {
        document.getElementById("test").style.fontFamily = "Roboto-Regular";
    } else if (font === "4") {
        document.getElementById("test").style.fontFamily = "YuseiMagic-Regular";
    }
}