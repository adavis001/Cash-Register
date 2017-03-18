


//Whats this for?  DO I still need this?  Re-purpose to Item total.
// var answerScreen = document.getElementById("display");
// var answer = document.createElement("div");
// answer.innerHTML = "";
// a = answer.innerHTML;
// answer.id = "answer";
// answerScreen.appendChild(answer);

//Displays price of item.  Use buttons to add price to.
var displayScreen = document.getElementById("display");
var price = document.createElement("div");
var p = price.innerHTML;
price.id = "showPrice";
//price.innerHTML = 0;
displayScreen.appendChild(price);

//DIsplays item quantity.  Increase quantity via + and - buttons.
var quantScreen = document.getElementById("quantityDisplay");
var quant = document.createElement("div");
quant.innerHTML = 0;
quant.id = "quantity";
quantScreen.appendChild(quant);
var moreBut = document.createElement("button");
moreBut.innerHTML = "+";
moreBut.addEventListener('click', function(event){
	quant.innerHTML++;
	totalP.innerHTML = price.innerHTML * quant.innerHTML;
});
var lessBut = document.createElement("button");
lessBut.innerHTML = "-";
lessBut.addEventListener('click', function(event){
	quant.innerHTML--; 
	totalP.innerHTML = price.innerHTML * quant.innerHTML;
});
quantScreen.appendChild(moreBut); quantScreen.appendChild(lessBut); 


//Glorious buttons!  Numbered buttons used to input price.
var btnBox = document.getElementById("calculator");
var numBtns = 10;

for (var i = 0; i< numBtns; i++) {
	var btn = document.createElement("button");
	btn.innerHTML = i;
	btn.id = "btn"+i;
	btn.addEventListener('click', function(event){
		price.innerHTML += event.target.innerHTML;
	});
	btnBox.appendChild(btn);
}

//Total Price of Item multiplied by quantity purchased.  
//Add a button that adds number to grand total.
//Create a div to append into Grand Total.  +=  Item Total.  Then Clears.
var shoppingCart = document.getElementById("grandTotal");
var cart = document.createElement("div");
cart.innerHTML.id = "shopCart";
shoppingCart.appendChild(cart);



var totalPrice = document.getElementById("priceTotal");
var totalP = document.createElement("div");
totalP.innerHTML = price.innerHTML * quant.innerHTML;
totalP.id = "TP";
totalPrice.appendChild(totalP);
var addToTotal = document.createElement("button");
addToTotal.innerHTML = "Add to Grand Total";
addToTotal.id = "totally";
addToTotal.addEventListener('click', function(event){
	cart.innerHTML = Number(totalP.innerHTML) + Number(cart.innerHTML);
	console.log(typeof cart.innerHTML);
});
totalPrice.appendChild(addToTotal);



// Operation buttons.  Some of these may be unnecessary.  Clean them up as needed.
var opBox = document.getElementById("calculator");
var numOfBtns = 10;


for (var i = 0; i< numOfBtns; i++) {
	var opBtn = document.createElement("button");
	opBtn.innerHTML = i;
	opBtn.id = "opBtn"+i;
	opBtn.addEventListener('click', function(event){
		console.log(event.target.id);
	});
	opBox.appendChild(opBtn);
}

opBtn0.innerHTML = ".";
	opBtn0.addEventListener('click', function(event){
		price.innerHTML += event.target.innerHTML;
});
	//addition button unnecessary?  Remove later.
opBtn1.innerHTML = "+";
	opBtn1.addEventListener('click', function(event){
		var additive = parseFloat(dScreen.innerHTML);
		answer.innerHTML += myCalc.add(additive);
	});
opBtn2.innerHTML = "-";
opBtn3.innerHTML = "*";
opBtn4.innerHTML = "/";
opBtn5.innerHTML = "=";
opBtn6.innerHTML = "Get Balance";
opBtn7.innerHTML = "Deposit Cash";
opBtn8.innerHTML = "Withdrawl Cash";
opBtn9.innerHTML = "Clear Price";
	opBtn9.addEventListener('click', function(event){
		price.innerHTML = "";
		quant.innerHTML = 0;
		totalP.innerHTML = 0;

});




