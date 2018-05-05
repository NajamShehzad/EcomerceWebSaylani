var TotalPrice = 0;
var quantity = 0; //now go for quantity


function addToCart(product) {
	var cartPrice = 0;//to find total price 
	var cartQuantity = 0;//now go for quantity
	var cart;//cart to add products
	quantity = 0;//to find quantity

	var p = product.parentElement.parentElement;//collecting data from input
	var name = p.getElementsByClassName("name")[0].innerText;
	var price = parseInt(p.getElementsByClassName("price")[0].innerText.replace("$", ""));
	var id = p.getElementsByClassName("id")[0].innerText;

	var objAddToCart = {
		name: name,
		price: price,
		id: id,
		quantity: 1
	}
	var pushcon = true;//if the product is new

	if (JSON.parse(localStorage.getItem("addToCart")) !== null) {

		cart = JSON.parse(localStorage.getItem("addToCart"));




		for (var i = 0; i < cart.length; i++) {//if we found same product it will add +1 in its quantity
			if (cart[i].id == id) {
				cart[i].quantity += 1;
				localStorage.setItem('addToCart', JSON.stringify(cart));
				pushcon = false;

			}
			if (cart[i].quantity > 1) {//to find price of a product which is more then 1 
				cartPrice = cartPrice + (cart[i].quantity * cart[i].price)
				TotalPrice = cartPrice;
			}
			else {
				cartPrice += cart[i].price;
				TotalPrice = cartPrice;
			}

		}
		if (pushcon) {//pushing new product into cart
			TotalPrice += objAddToCart.price;
			cart.push(objAddToCart);//if the product is new it simply add it to our cart
			localStorage.setItem('addToCart', JSON.stringify(cart));

		}
		for (var i = 0; i < cart.length; i++) {
			quantity += cart[i].quantity;
		}

	}
	else {
		TotalPrice = objAddToCart.price;
		cart = [];//if the web is use first time
		cart.push(objAddToCart);
		localStorage.setItem('addToCart', JSON.stringify(cart));
		quantity = cart.quantity;
	}



}
(function () {//this is for cart icon to show price and quantity  in global scope
	var cartPrice = 0;
	if (JSON.parse(localStorage.getItem("addToCart")) !== null) {
		var cart = JSON.parse(localStorage.getItem("addToCart"));//

		for (var i = 0; i < cart.length; i++) {

			if (cart[i].quantity > 1) {//to find total price
				cartPrice = cartPrice + (cart[i].quantity * cart[i].price)
				TotalPrice = cartPrice;
			}
			else {
				cartPrice += cart[i].price;
				TotalPrice = cartPrice;
			}
		}
		for (var i = 0; i < cart.length; i++) {//to find Quantity
			quantity += cart[i].quantity;
		}
	}
} ());


