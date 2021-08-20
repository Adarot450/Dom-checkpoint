var body = document.getElementById('body');
var Item = document.getElementById('Item');
var Price = document.getElementById('Price').innerHTML;
var PriceInNo = parseInt(Price, 10);
var Quantity = document.getElementById('quantity').innerHTML;
var QuantityInNumber = parseInt(Quantity, 10);
var fav = false;
var heart = document.getElementById('heart')
var FinalPrice = document.getElementById('Total').innerHTML;
var thanks = document.getElementById('thanks')
var sum = 0;


function plus() {
    QuantityInNumber++;
    document.getElementById('quantity').innerHTML = QuantityInNumber;
    total()
}

function minus() {
    if (QuantityInNumber > 0) {
        QuantityInNumber--;
        document.getElementById('quantity').innerHTML = QuantityInNumber;
        total()
    } else {
        alert("mininum amount is 0");
    }
}

function love() {
    if (fav == false) {
        fav = true;
        heart.style.color = 'red';
    } else {
        fav = false;
        heart.style.color = 'black'
    }
}

function remove() {
    body.removeChild(Item);
}

function total() {
    sum = QuantityInNumber * PriceInNo;
    document.getElementById('Total').innerHTML = sum;
}

function checkout() {
    if (sum > 0) {
        var CardNumber = prompt("enter your card number")
        var cvv = prompt("enter the card's ccv")
        var CardName = prompt("enter the cards name")
        document.getElementById('thanks').innerHTML = `Thank you for shoping with us ${CardName} your total was ${sum}`
    } else {
        alert('Total must be over 0')
    }
}