

var displayScreen = document.getElementById("display");
var price = document.createElement("div");
price.id = "display";
displayScreen.appendChild(price);

var answerScreen = document.getElementById("display");
var answer = document.createElement("div");
answer.innerHTML = "";
answer.id = "answer";
answerScreen.appendChild(answer);

var quantScreen = document.getElementById("quantityDisplay");
var quant = document.createElement("div");
quant.innerHTML = 1;
quant.id = "quantity";
quantScreen.appendChild(quant);
var moreBut = document.createElement("button");
moreBut.innerHTML = "+";
moreBut.addEventListener('click', function(event){
	quant.innerHTML++;
});
var lessBut = document.createElement("button");
lessBut.innerHTML = "-";
lessBut.addEventListener('click', function(event){
	quant.innerHTML--;
});
quantScreen.appendChild(moreBut); quantScreen.appendChild(lessBut);


price.innerHTML = "Item Price: $" + answer.innerHTML;


var btnBox = document.getElementById("calculator");
var numBtns = 10;

for (var i = 0; i< numBtns; i++) {
	var btn = document.createElement("button");
	btn.innerHTML = i;
	btn.id = "btn"+i;
	btn.addEventListener('click', function(event){
		price.innerHTML += event.target.innerHTML;
		console.log(event.target.id);
	});
	btnBox.appendChild(btn);
}

btn0.innerHTML = 0;	
btn1.innerHTML = 1;
btn2.innerHTML = 2;
btn3.innerHTML = 3;
btn4.innerHTML = 4;
btn5.innerHTML = 5;
btn6.innerHTML = 6;
btn7.innerHTML = 7;
btn8.innerHTML = 8;
btn9.innerHTML = 9;




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
		price.innerHTML = "Item Price: $" + answer.innerHTML;
		answer.innerHTML = "";
		additive = 0;
});




