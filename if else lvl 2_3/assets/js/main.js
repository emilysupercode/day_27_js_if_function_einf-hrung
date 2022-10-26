function difference() {
    const xString = document.getElementById("input").value;
    const x = parseInt(xString);

    if (x <= 27) {
        console.log(x - 27);
        document.getElementById("newNumber").innerHTML = x - 27;
    } else if (x > 27) {
        console.log((x - 27) * 2);
        document.getElementById("newNumber").innerHTML = (x - 27) * 2;
    }

}