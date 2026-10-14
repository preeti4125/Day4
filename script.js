
let prices = {
    Pen: 10,
    Notebook: 50,
    Bag: 500,
    Bottle: 100
};

let finalTotal = 0;

function setPrice() {
    let product = document.getElementById("product").value;
    document.getElementById("price").value = prices[product] || 0;
}

function addItem() {

    let product = document.getElementById("product").value;
    let price = Number(document.getElementById("price").value);
    let quantity = Number(document.getElementById("quantity").value);

    let total = price * quantity;

    finalTotal = finalTotal + total;

    document.getElementById("bill").innerHTML +=
        "<tr><td>" + product + "</td><td>₹" + price +
        "</td><td>" + quantity + "</td><td>₹" + total + "</td></tr>";

    document.getElementById("finalTotal").innerText = finalTotal;
}
