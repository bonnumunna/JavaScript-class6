function showMessage() {
    alert("You clicked me");
}

function showKey(x) {
    console.log(x.value);
}

function showValue(x) {
    console.log(x.value);
}

function getValue(x) {
    console.log(x.value);
}

function showMenu(x) {
    console.log(x.value);
    let menu = x.value;
    price = null;
    switch (menu) {
        case "Fried Rice":
            price = 4.9;
            break;
        case "Sharwama":
            price = 1.3;
            break;
        case "Chinese Rice":
            price = 5.83;
            break;
    }
    document.getElementById('price').innerText = "$" + price;

}

function changeNumber(x) {
    // console.log(x.value);
    var quantity = x.value;

    var cost = quantity * price;

    document.getElementById('price').innerText = "$" + cost;
}