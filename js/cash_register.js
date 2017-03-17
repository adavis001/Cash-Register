

var displayButton = document.getElementById("display");
var dButton = document.createElement("div");
dButton.innerHTML = "display";
dButton.id = "display";
displayButton.appendChild(dButton);


var btnBox = document.getElementById("calculator");
var numBtns = 21;

for (var i = 0; i< numBtns; i++) {
	var btn = document.createElement("button");
	btn.innerHTML = i;
	btn.id = "btn"+i;
	btn.addEventListener('click', function(event){
		dButton.innerHTML = event.target.innerHTML;
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
btn11.innerHTML = "Add";
btn12.innerHTML = "Subtract";
btn13.innerHTML = "Multiply";
btn14.innerHTML = "Divide";
btn15.innerHTML = "Equals";
btn16.innerHTML = "Clear";
btn17.innerHTML = "Get Balance";
btn18.innerHTML = "Deposit Cash";
btn19.innerHTML = "Withdrawl Cash";
btn20.innerHTML = ".";
