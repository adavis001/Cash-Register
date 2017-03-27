

document.body.style.backgroundImage = "url(http://wallpapercave.com/wp/xfo0jEX.png)";

var wallpapers = ["url(http://wallpapercave.com/wp/xfo0jEX.png)", "url(http://interfacelift.com/wallpaper/previews/01141_hal9000_672x420.jpg)"];

function changeWallpaper() {
		document.body.style.backgroundImage = "url(http://interfacelift.com/wallpaper/previews/01141_hal9000_672x420.jpg)";
}
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
	totalP.innerHTML = (price.innerHTML * quant.innerHTML).toFixed(2);
});
var lessBut = document.createElement("button");
lessBut.innerHTML = "-";
lessBut.addEventListener('click', function(event){
	quant.innerHTML--; 
	totalP.innerHTML = price.innerHTML * quant.innerHTML;
});
var textBox = document.createElement("input");
textBox.id = "Hal";
var urlWallpaper = function() {
	document.body.style.backgroundImage = "'url(" +document.getElementById("Hal").value +")'";
	console.log("'url(" +document.getElementById("Hal").value +")'");
};
quantScreen.appendChild(moreBut); quantScreen.appendChild(lessBut); quantScreen.appendChild(textBox);


//Glorious buttons!  Numbered buttons used to input price.
//add a "." button with a beulean value.  Changes from true to false 
var btnBox = document.getElementById("calculator");
var numBtns = 10;

for (var i = 0; i< numBtns; i++) {
	var btn = document.createElement("button");
	btn.innerHTML = i;
	btn.id = "btn"+i;
	btn.addEventListener('click', function(event){
		price.innerHTML += event.target.innerHTML;
		console.log(btn.id);
	});
	btnBox.appendChild(btn);
}

bigButtOn = document.createElement('button');
bigButtOn.innerHTML = ".";
bigButtOn.id = ".";
bigButtOn.used = false;
bigButtOn.addEventListener('click', function(event){
	if(bigButtOn.used === false){
		price.innerHTML += event.target.innerHTML;
		bigButtOn.used = true;
	}
});
	btnBox.appendChild(bigButtOn);

clearBtn = document.createElement('button');
clearBtn.innerHTML = "Clear Price";
	clearBtn.addEventListener('click', function(event){
		price.innerHTML = "";
		quant.innerHTML = 0;
		totalP.innerHTML = 0;
		bigButtOn.used = false;
		urlWallpaper();
});	
	btnBox.appendChild(clearBtn);



//Total Price of Item multiplied by quantity purchased.  
//Add a button that adds number to grand total.
var shoppingCart = document.getElementById("grandTotal");
var cart = document.createElement("div");
cart.innerHTML = 0;
cart.id = "sCart";
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
	cart.innerHTML = (Number(totalP.innerHTML) + Number(cart.innerHTML)).toFixed(2);
	price.innerHTML = "";
	quant.innerHTML = 0;
	totalP.innerHTML = 0;
});
totalPrice.appendChild(addToTotal);


//Create a div to append into Grand Total.  +=  Item Total.  Then Clears.
// Gran Total needs  BUTTON that adds to Register Balance. (Don't display Balance)
var toBalance = document.createElement("button");
var balance = 0;
toBalance.innerHTML = "Deposit/Withdrawl Cash";
toBalance.addEventListener('click', function(event){
	balance += Number(cart.innerHTML);
	currentBalance.innerHTML = "Current Balance =$" + balance;
	balance.innerHTML = 0;
	cart.innerHTML = 0;
	price.innerHTML = "";
	quant.innerHTML = 0;
	totalP.innerHTML = 0;
	bigButtOn.used = false;

	console.log(balance);
});
shoppingCart.appendChild(toBalance);

// Ironically this for loop was necessary at one point...but now I just use it once.
var opBox = document.getElementById("balance");
var numOfBtns = 1;


var showBalance = document.getElementById("balance");
var currentBalance = document.createElement('div');
currentBalance.innerHTML = "Current Balance = $" + balance;
showBalance.appendChild(currentBalance);

