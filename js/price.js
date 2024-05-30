/* get cart total from session on load */
updateCartTotal();
/* button event listeners */
document.getElementById("emptycart").addEventListener("click", emptyCart);
var btns = document.getElementsByClassName('addtocart');
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {addToCart(this);});
}

/* ADD TO CART functions */

function addToCart(elem) {
    //init
    var sibs = [];
    var getprice;
    var getproductName;
    var cart = [];
     var stringCart;
    //cycles siblings for product info near the add button
    while(elem = elem.previousSibling) {
        if (elem.nodeType === 3) continue; // text node
        if(elem.className == "price"){
            getprice = elem.innerText;
        }
        if (elem.className == "productname") {
            getproductName = elem.innerText;
        }
        sibs.push(elem);
    }
    //create product object
    var product = {
        productname : getproductName,
        price : getprice
    };
    //convert product data to JSON for storage
    var stringProduct = JSON.stringify(product);
    /*send product data to session storage */
    
    if(!sessionStorage.getItem('cart')){
        //append product JSON object to cart array
        cart.push(stringProduct);
        //cart to JSON
        stringCart = JSON.stringify(cart);
        //create session storage cart item
/* Calculate Cart Total */
    var price = 0;
    var carttable = "";
        var cart = JSON.parse(sessionStorage.getItem('cart'));
        //get no of items in cart 
        //loop over cart array
        for (var i = 0; i < items; i++){
            var x = JSON.parse(cart[i]);
            //get property value of price
            productname = x.productname;
            //add price to total
            total += price;
        }
        
    }
    document.getElementById("total").innerHTML = total.toFixed(2);
    //insert saved products to cart table
    document.getElementById("carttable").innerHTML = carttable;
    //update items in cart on website HTML
    document.getElementById("itemsquantity").innerHTML = items;
}
//user feedback on successful add
function addedToCart(pname) {
  var message = pname + " was added to the cart";
  var alerts = document.getElementById("alerts");
  alerts.innerHTML = message;
  if(!alerts.classList.contains("message")){
     alerts.classList.add("message");
  }
}
/* User Manually empty cart */
function emptyCart() {
    //remove cart session storage object & refresh cart totals
    if(sessionStorage.getItem('cart')){
        sessionStorage.removeItem('cart');
        updateCartTotal();
      //clear message and remove class style
      var alerts = document.getElementById("alerts");
      alerts.innerHTML = "";
      if(alerts.classList.contains("message")){
          alerts.classList.remove("message");
      }
    }
}

var options = {
    "key": "rzp_test_v609UEjkXppUeB", // Enter the Key ID generated from the Dashboard
    "amount": "100101", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Digi",
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "order_JayolHuGNizBlz", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response){
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
    },
    // "prefill": {
    //     "name": "Gaurav Kumar",
    //     "email": "gaurav.kumar@example.com",
    //     "contact": "9999999999"
    // },
    // "notes": {
    //     "address": "Razorpay Corporate Office"
    // },
    "theme": {
        "color": "#3399cc"
    }
};

var rzp1 = new Razorpay(options);
rzp1.on('payment.failed', function (response){
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
});
document.getElementById('rzp-button1').onclick = function(e){
    rzp1.open();
    e.preventDefault();
}    //update total on website HTML
            carttable += "<tr><td>" + productname + "</td><td>$" + price.toFixed(2) + "</td></tr>";
            price = parseFloat(x.price.split('$')[1]);
            //convert each JSON product in array back into object
        items = cart.length;
        //get cart data & parse to array
    if(sessionStorage.getItem('cart')) {
    var productname = "";
    var items = 0;
    var total = 0;
function updateCartTotal(){
    //init
    }
}
        sessionStorage.setItem('cart', stringCart);
        updateCartTotal();
        addedToCart(getproductName);
        addedToCart(getproductName);
        sessionStorage.setItem('cart', stringCart);
        //overwrite cart data in sessionstorage 
        updateCartTotal();
    }
    else {
        stringCart = JSON.stringify(cart);
        //get existing cart data from storage and convert back into array
       cart = JSON.parse(sessionStorage.getItem('cart'));
        //cart back to JSON
        //append new product JSON object
        cart.push(stringProduct);

