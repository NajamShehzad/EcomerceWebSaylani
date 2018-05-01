function addToCart(product){
	var p = product.parentElement.parentElement;
	var name = product.innerText;
	var price = p.getElementsByClassName("price")[0].innerText.replace("$","");
	
	var objAddToCart = {
		name : name,
		price : price
	}
	var cart = JSON.parse(localStorage.getItem("addToCart"));
	if(JSON.parse(localStorage.getItem("addToCart")) !== null){
		cart.push(objAddToCart);
		localStorage.setItem('addToCart', JSON.stringify(cart));
	}
	else{
		cart = [];
		cart.push(objAddToCart);
		localStorage.setItem('addToCart', JSON.stringify(cart));
	}
}
