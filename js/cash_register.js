

var displayButton = document.getElementById("display");
var dButton = document.createElement("button");
dButton.innerHTML = "$";
dButton.id = "display";
displayButton.appendChild(dButton);


var btnBox = document.getElementById("calculator");
var numBtns = 17;

for (var i = 0; i< numBtns; i++) {
	var btn = document.createElement("button");
	btn.innerHTML = i;
	btn.id = "btn"+i;
	btn.addEventListener('click', function(event){
		dButton.innerHTML += event.target.innerHTML;
		console.log(event.target.id);
	});
	btnBox.appendChild(btn);
}

btn0.innerHTML = "0";
btn1.innerHTML = "1";
btn2.innerHTML = "2";
btn3.innerHTML = "3";
btn4.innerHTML = "4";
btn5.innerHTML = "5";
btn6.innerHTML = "6";
btn7.innerHTML = "7";
btn8.innerHTML = "8";
btn9.innerHTML = "9";
btn10.innerHTML = "00";
btn11.innerHTML = ".";
btn12.innerHTML = "+";
btn13.innerHTML = "-";
btn14.innerHTML = "*";
btn15.innerHTML = "/";
btn16.innerHTML = "=";


var opBox = document.getElementById("calculator");
var numOfBtns = 4;


for (var i = 0; i< numOfBtns; i++) {
	var opBtn = document.createElement("button");
	opBtn.innerHTML = i;
	opBtn.id = "opBtn"+i;
	opBtn.addEventListener('click', function(event){
		console.log(event.target.id);
	});
	opBox.appendChild(opBtn);
}

opBtn0.innerHTML = "Clear";
opBtn0.addEventListener('click', function(event){
	dButton.innerHTML = "$";
});
opBtn1.innerHTML = "Get Balance";
opBtn2.innerHTML = "Deposit Cash";
opBtn3.innerHTML = "Withdrawl Cash";

