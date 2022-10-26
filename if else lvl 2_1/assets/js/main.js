function playGame(event) {
    event.preventDefault;

    const xString = document.getElementById("j_height").value;
    const x = parseInt(xString);

    const yString = document.getElementById("m_height").value;
    const y = parseInt(yString);

    const aString = document.getElementById("j_age").value;
    const a = parseInt(aString);

    const j = a * 5;
    const johnValue = j + x;

    const bString = document.getElementById("m_age").value;
    const b = parseInt(bString);

    const m = b * 5;

    const meikeValue = m + y;

    if (johnValue < meikeValue) {
        document.getElementById("johnValue").innerHTML = johnValue + " - John loses :(";
        document.getElementById("meikeValue").innerHTML = meikeValue + " - Meike wins!!!! :)";
    } else if (johnValue > meikeValue) {
        document.getElementById("johnValue").innerHTML = johnValue + " - John wins!!!! :)";
        document.getElementById("meikeValue").innerHTML = meikeValue + " - Meike loses :(";
    } else if (johnValue === meikeValue) {
        document.getElementById("johnValue").innerHTML = johnValue + " - everyone loses!!!! :)";
        document.getElementById("meikeValue").innerHTML = meikeValue + " - everyone loses!!!! :)";
    } else {
        document.getElementById("johnValue").innerHTML = "something went wrong, please try again";
        document.getElementById("meikeValue").innerHTML = "something went wrong, please try again";
    }


}