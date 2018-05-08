//localStorage.setItem(deafultUser,JSON.stringify(true));
var TotalPrice = 0;
var quantity = 0; //now go for quantity
var userLogin = JSON.parse(localStorage.getItem("userLogin"));



function addToCart(product) {

	if (userLogin !== true) {
		var cartPrice = 0;//to find total price 
		var cartQuantity = 0;//now go for quantity
		var cart;//cart to add products
		quantity = 0;//to find quantity

		var p = product.parentElement.parentElement;//collecting data from input
		var name = p.getElementsByClassName("name")[0].innerText;
		var price = parseInt(p.getElementsByClassName("price")[0].innerText.replace("$", ""));
		var id = p.getElementsByClassName("id")[0].innerText;

		var objDeafultCart = {
			name: name,
			price: price,
			id: id,
			quantity: 1
		}
		var pushcon = true;//if the product is new

		if (JSON.parse(localStorage.getItem("DeafultCart")) !== null) {

			cart = JSON.parse(localStorage.getItem("DeafultCart"));




			for (var i = 0; i < cart.length; i++) {//if we found same product it will add +1 in its quantity
				if (cart[i].id == id) {
					cart[i].quantity += 1;
					localStorage.setItem('DeafultCart', JSON.stringify(cart));
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
				TotalPrice += objDeafultCart.price;
				cart.push(objDeafultCart);//if the product is new it simply add it to our cart
				localStorage.setItem('DeafultCart', JSON.stringify(cart));

			}
			for (var i = 0; i < cart.length; i++) {
				quantity += cart[i].quantity;
			}

		}
		else {
			TotalPrice = objDeafultCart.price;
			cart = [];//if the web is use first time
			cart.push(objDeafultCart);
			localStorage.setItem('DeafultCart', JSON.stringify(cart));
			quantity = cart.quantity;
		}

	}
	else {
		var cartPrice = 0;//to find total price 
		var cartQuantity = 0;//now go for quantity
		var cart;//cart to add products
		quantity = 0;//to find quantity

		var userNumber = JSON.parse(localStorage.getItem("userNumber"));//getting user Number To Identify The User
		//alert("Working00");
		users = JSON.parse(localStorage.getItem('users'));
		var p = product.parentElement.parentElement;//collecting data from input
		var name = p.getElementsByClassName("name")[0].innerText;
		var price = parseInt(p.getElementsByClassName("price")[0].innerText.replace("$", ""));
		var id = p.getElementsByClassName("id")[0].innerText;
		var pushcon = true;//if the product is new

		var userCart = {
			name: name,
			price: price,
			id: id,
			quantity: 1
		}
		for (var i = 0; i < users[userNumber].cart.length; i++) {//if we found same product it will add +1 in its quantity
			if (users[userNumber].cart[i].id == id) {
				users[userNumber].cart[i].quantity += 1;
				localStorage.setItem('users', JSON.stringify(users));
				pushcon = false;

			}
			if (users[userNumber].cart[i].quantity > 1) {//to find price of a product which is more then 1 
				cartPrice = cartPrice + (users[userNumber].cart[i].quantity * users[userNumber].cart[i].price)
				TotalPrice = cartPrice;
			}
			else {
				cartPrice += users[userNumber].cart[i].price;
				TotalPrice = cartPrice;
			}

		}
		if (pushcon) {//pushing new product into user cart
			TotalPrice += userCart.price;
			users[userNumber].cart.push(userCart);//if the product is new it simply add it to our user cart
			localStorage.setItem('users', JSON.stringify(users));

		}
		for (var i = 0; i < users[userNumber].cart.length; i++) {
			quantity += users[userNumber].cart[i].quantity;
		}


	}

}
//var	users = JSON.parse(localStorage.getItem('users'));

(function () {//this is for cart icon to show price and quantity  in global scope
	var cartPrice = 0;
	if (JSON.parse(localStorage.getItem("DeafultCart")) !== null) {
		var cart = JSON.parse(localStorage.getItem("DeafultCart"));//

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
}());


