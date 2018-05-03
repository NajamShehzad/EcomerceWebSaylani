var TotalPrice = 0;
function addToCart(product) {
	var cartPrice = 0;
	var cart;
	if (JSON.parse(localStorage.getItem("addToCart")) !== null) {

		cart = JSON.parse(localStorage.getItem("addToCart"));
		// for(var i = 0 ; i < cart.length ; i++){
		// 	if(cart[i].quantity > 1){
		// 		TotalPrice = TotalPrice + (cart[i].quantity * cart[i].price)
		// 	}
		// 	else{
		// 		TotalPrice += cart[i].price;
		// 	}
		// }

	};

	var p = product.parentElement.parentElement;
	var name = p.getElementsByClassName("name")[0].innerText;
	var price = parseInt(p.getElementsByClassName("price")[0].innerText.replace("$", ""));
	var id = p.getElementsByClassName("id")[0].innerText;

	var objAddToCart = {
		name: name,
		price: price,
		id: id,
		quantity: 1
	}
	var pushcon = true;

	if (JSON.parse(localStorage.getItem("addToCart")) !== null) {
		for (var i = 0; i < cart.length; i++) {//if we found same product it will add +1 in its quantity
			if (cart[i].id == id) {
				cart[i].quantity += 1;
				localStorage.setItem('addToCart', JSON.stringify(cart));
				pushcon = false;
			}
			if (cart[i].quantity > 1) {
				cartPrice = cartPrice + (cart[i].quantity * cart[i].price)
				TotalPrice = cartPrice;
			}
			else {
				cartPrice += cart[i].price;
				TotalPrice = cartPrice;
			}

		}
		if (pushcon) {
			
			cart.push(objAddToCart);//if the product is new it simply add it to our cart
			localStorage.setItem('addToCart', JSON.stringify(cart));
			
		}

	}
	else {
		TotalPrice = objAddToCart.price;
		cart = [];//if the web is using first time
		cart.push(objAddToCart);
		localStorage.setItem('addToCart', JSON.stringify(cart));
	}



}


