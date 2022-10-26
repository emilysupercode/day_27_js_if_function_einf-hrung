function changeBackground(event) {
    event.preventDefault();

    const colorInput = document.getElementById("input").value;
    console.log(colorInput);

    document.getElementById("bg").style.backgroundColor = colorInput;
}