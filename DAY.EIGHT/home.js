

var myCart = [];
var totalPayable = 0;
function addToCart (exPrice, exProductName) {
    var myQty = document.getElementById("Quantity").value;
    var price = exPrice;
    var productName = exProductName;

    var totalPrice = parseInt(myQty) * price;
    var item = productName + " x" + myQty + " :$" + totalPrice;

    totalPayable = totalPayable + totalPrice;

    myCart.push(item);
    }

    //display it
    document.getElementById("my_shopping_cart").innerHTML = "";

    for( var a = 0; a < myCart.length ; a++){
        var currItem = myCart[a] + "<br>";
        var currResult = document.getElementById("my_shopping_cart").innerHTML;
        
        document.getElementById("my_shopping_cart").innerHTML = currResult + currItem;
    }

    //display the totalPayable
    document.getElementById("totalPayable").value = totalPayable;
    

function payNow () {
    var grandTotal = document.getElementById("totalPayable").value;
    var userPay = document.getElementById("totalUserPay").value;

    grandTotal = parseInt(grandTotal);
    userPay = parseInt(userPay);

    if(userPay >= grandTotal) {
        var change = userPay - grandTotal;
        document.getElementById("changeTotal").value = change;
    }

    else {
        alert("Insufficient amount!");
    }
}

/*
document.getElementById('my_shopping_cart').innerHTML = Qty + ""
"IPhone x2: $600 <br>";

document.getElementById('my_shopping_cart').innerHTML = 
document.getElementById('my_shopping_cart').innerHTML +
"IPhone x2: $600 <br>"; 
*/