
//takes 2 numbers and adds them
function add (a,b) {
	let solution = a + b;
	return (solution);
}

//takes 2 numbers and subtracts them
function subtract (a,b) {
	let solution = a - b;
	return (solution);
}

//takes 2 numbers and mulitplies them
function multiply1 (a,b) {
	let solution = a * b;
	return (solution);
}

//takes 2 numbers and divides them
function divide (a,b) {
	let solution = a / b;
	return (solution);
}

//takes an array and adds all of the numbers together
function sum (array) {
	let solution = array.reduce(function(a,b) {
		return a + b;
	}, 0);
return (solution);
}

//takes an array and multiplies all of the numbers together
function multiply (array) {
	let solution = array.reduce(function(a,b) {
		return a*b;
	}, 1);
return (solution);
}

//takes 2 numbers and returns the power of the first number raised to the second
function power(a,b) {
		return a**b;
	}

//takes a number and returns an operator
function factorial(a) {
	let solution = a;
	if (a == 0) {
		return(1);
	} else {
		for (i=a-1;i>=1;i--) {
			solution *= i;
		}
	}
	return(solution);
}

//Completes an operation with 2 numbers and an operator
function operate(a,b,operator) {
    if (operator == 'x') {
        return multiply1(a,b);
    } else if (operator == '/') {
        return divide(a,b);
    } else if (operator == '-') {
        return subtract(a,b);
    } else if (operator == '+') {
        return add(a,b);
    }
}


//querySelector for the display of the calculator
let displayScreen = document.querySelector("#Display");
let initialDisplay = 0;
displayScreen.textContent = initialDisplay;

//changes the display when a button is pushed
function changeDisplay(button) {
	displayScreen.textContent = button;
}

//add event listeners that change the display on the calculator 
//for each keyboard button
const btn1 = document.querySelector("#btn1");
btn1.addEventListener('click', function() {changeDisplay("1");});

const btn2 = document.querySelector("#btn2");
btn2.addEventListener('click', function() {changeDisplay("2");});

const btn3 = document.querySelector("#btn3");
btn3.addEventListener('click', function() {changeDisplay("3");});

const btn4 = document.querySelector("#btn4");
btn4.addEventListener('click', function() {changeDisplay("4");});

const btn5 = document.querySelector("#btn5");
btn5.addEventListener('click', function() {changeDisplay("5");});

const btn6 = document.querySelector("#btn6");
btn6.addEventListener('click', function() {changeDisplay("6");});

const btn7 = document.querySelector("#btn7");
btn7.addEventListener('click', function() {changeDisplay("7");});

const btn8 = document.querySelector("#btn8");
btn8.addEventListener('click', function() {changeDisplay("8");});

const btn9 = document.querySelector("#btn9");
btn9.addEventListener('click', function() {changeDisplay("9");});

const btn0 = document.querySelector("#btn0");
btn0.addEventListener('click', function() {changeDisplay("0");});

const Equal = document.querySelector("#Equal");
Equal.addEventListener('click', function() {changeDisplay("=");});

const clear = document.querySelector("#clear");
clear.addEventListener('click', function() {changeDisplay("0");});

const Subtract = document.querySelector("#Subtract");
Subtract.addEventListener('click', function() {changeDisplay("-");});

const Add = document.querySelector("#Add");
Add.addEventListener('click', function() {changeDisplay("+");});

const Divide = document.querySelector("#Divide");
Divide.addEventListener('click', function() {changeDisplay("/");});

const Multiply = document.querySelector("#Multiply");
Multiply.addEventListener('click', function() {changeDisplay("x");});

