var btnBox = document.getElementById("Calculator");
var numBtns = 20;

for (var i = 0; i< numBtns; i++) {
	var btn = document.createElement("button");
	btn.innerHTML = i;
	btn.id = "btn"+i;
	btn.addEventListener('click', function(event){
	console.log(event.target.id);
});
	btnBox.appendChild(btn);
	
}

btn0.innerHTML = "0";
btn1.innerHTML = "1";
btn2.innerHTML = "3";
btn3.innerHTML = "4";
btn4.innerHTML = "5";
btn5.innerHTML = "6";
btn6.innerHTML = "7";
btn7.innerHTML = "8";
btn8.innerHTML = "9";
btn9.innerHTML = "+";
btn10.innerHTML = "-";
btn11.innerHTML = "*";
btn12.innerHTML = "divide";
btn13.innerHTML = "=";
btn14.innerHTML = "clear";
btn15.innerHTML = "get balance";
btn16.innerHTML = "deposit";
btn17.innerHTML = "withdrawl cash";
btn18.innerHTML = "customer service";
btn19.innerHTML = "Silent Alarm";
btn20.innerHTML = "Life Advice";