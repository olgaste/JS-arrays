$(document).ready(function() {
	var products = [
	{
		name: "T-short",
		color: "black",
		size: "M",
		images: ["images/t-short.jpg"],
		price: 20.5
	},
	{
		name: "Trousers",
		color: "green",
		size: "S",
		images: ["images/trousers.jpg"],
		price: 34.0
	},
	{
		name: "Hat",
		color: "blue",
		size: "S",
		images: ["images/hat.jpg"],
		price: 2.3
	}
	];

	init();
	
	function init() {
		showLowPrice();
		showHighPrice();
		showSizeM();
		LoadRandom();
	};

	function showLowPrice() {
		var lowest_price = products[0].price;
		var product_index = 0;

		for (var i = 1; i < products.length; i++) {
			if(products[i].price < lowest_price){
				lowest_price = products[i].price;
				product_index = i;
			}
		}
		var lowest_price_img = $('<img>').attr('src', products[product_index].images);
		$('.lowest_price_img').append(lowest_price_img);  
		$('.lowest_price_name').append(products[product_index].name);
		$('.lowest_price_color').append(products[product_index].color);
		$('.lowest_price_size').append(products[product_index].size);
		$('.lowest_price_price').append(products[product_index].price);
	}

	function showHighPrice() {
		var highest_price = products[0].price;
		var product_index = 0;

		for(var i = 1; i < products.length; i++) {
			if (products[i].price > highest_price) {
				highest_price = products[i].price;
				product_index = i;
			}
		}

		var highest_price_img = $('<img>').attr('src', products[product_index].images);
		$('.highest_price_img').append(highest_price_img); 
		$('.highest_price_name').append(products[product_index].name);
		$('.highest_price_color').append(products[product_index].color);
		$('.highest_price_size').append(products[product_index].size);
		$('.highest_price_price').append(products[product_index].price); 
	}

	function showSizeM(items){
		var size_m = [];

		for(var i=0; i < products.length; i++){
			if(products[i].size == 'M'){
				product_index = i;
			}
		}
		
		for(var i=0; i<size_m.length; i++){
		}

		var size_m_img = $('<img>').attr('src', products[product_index].images);
		$('.size_m_img').append(size_m_img); 
		$('.size_m_name').append(products[product_index].name);
		$('.size_m_color').append(products[product_index].color);
		$('.size_m_size').append(products[product_index].size);
		$('.size_m_price').append(products[product_index].price); 
	}

	function LoadRandom() {
		var random_choice = Math.floor(Math.random() * products.length);

		var random_choice_img = $('<img>').attr('src', products[random_choice].images);
		$('.random_choice_img').append(random_choice_img); 
		$('.random_choice_name').append(products[random_choice].name);
		$('.random_choice_color').append(products[random_choice].color);
		$('.random_choice_size').append(products[random_choice].size);
		$('.random_choice_price').append(products[random_choice].price); 
	}  
});


