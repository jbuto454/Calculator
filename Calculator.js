
//takes 2 numbers and adds them
function add (a,b) {
	let solution = parseInt(a) + parseInt(b);
	return (solution);
}

//takes 2 numbers and subtracts them
function subtract (a,b) {
	let solution = parseInt(a) - parseInt(b);
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
	console.log(typeof(button));
	if (displayScreen.textContent !== "0" && typeof(button) === 'number' 
	&& displayScreen.textContent !== "x" && displayScreen.textContent !== "="
	&& displayScreen.textContent !== "-" && displayScreen.textContent !== "+"
	&& displayScreen.textContent !== "/" && (currentInputs[1] !== "x" && 
	currentInputs[1] !== "-" && currentInputs[1] !== "+" && currentInputs[1] !== "/")) {
		displayScreen.textContent += button;
	} else if ((button === "x" || button === "=" || button === "/" 
	|| button === "+" || button === "-") && (currentInputs[1] === "x" || 
	currentInputs[1] === "=" || currentInputs[1] === "-" 
	|| currentInputs[1] === "/" || currentInputs[1] === "+") && (currentInputs.length >= 3)) {
		displayScreen.textContent = operate(currentInputs[0],currentInputs[2],currentInputs[1]);
		console.log(operate(currentInputs[0],currentInputs[2],currentInputs[1]));
	} else if (typeof(button) !== 'number') {
		displayScreen.textContent = button;
	} else {
		displayScreen.textContent = button;
	}
}

//clears the display so its back to its intial value
function clearDisplay(button) {
	displayScreen.textContent = initialDisplay;
}

//creates a empty array to store values in to operate on
let currentInputs = [0];

//store inputs into the curentInputs array
function addToArray(input) {
	console.log(input);
	console.log(typeof(input));
	console.log(displayScreen.textContent);
	if (typeof input == 'number' && displayScreen.textContent !== "x" 
	&& displayScreen.textContent !== "="
	&& displayScreen.textContent !== "-" && displayScreen.textContent !== "+"
	&& displayScreen.textContent !== "/" && (currentInputs[1] !== "x" && 
	currentInputs[1] !== "-" && currentInputs[1] !== "+" && currentInputs[1] !== "/")) {
		currentInputs[currentInputs.length - 1] = displayScreen.textContent + input;
		console.log(currentInputs);
		console.log("maybe");
	} else if ((input === "x" || input === "=" || input === "/" 
	|| input === "+" || input === "-") && (currentInputs[currentInputs.length - 1] === "x" || 
	currentInputs[currentInputs.length - 1] === "=" || currentInputs[currentInputs.length - 1] === "-" 
	|| currentInputs[currentInputs.length - 1] === "/" || currentInputs[currentInputs.length - 1] === "+")) {
		currentInputs[currentInputs.length - 1] = input;
	} else {
		currentInputs.push(input);
		console.log(currentInputs);
		console.log("want");
	}
}

//puts the solution to the previous math problem in the first slot of the currentInputs array
//and deletes the 2nd and 3rd slots, effectivley starting a fresh array
function suffleArray(input) {
	if ((input === "x" || input === "=" || input === "/" 
	|| input === "+" || input === "-") && (currentInputs[1] === "x" || 
	currentInputs[1] === "=" || currentInputs[1] === "-" 
	|| currentInputs[1] === "/" || currentInputs[1] === "+") && (currentInputs.length >= 3)) {
		currentInputs[0] = displayScreen.textContent;
		currentInputs[1] = currentInputs[3];
		currentInputs.splice(2);
		currentInputs.splice(3);
		console.log("shuffle");
		console.log(currentInputs);
	}
}


//clears the array back to only containing 0
function clearArray(input) {
	currentInputs = [0];
	console.log(currentInputs);
}


//add event listeners that change the display on the calculator 
//for each keyboard button
const btn1 = document.querySelector("#btn1");
btn1.addEventListener('click', function() {addToArray(1);changeDisplay(1)});

const btn2 = document.querySelector("#btn2");
btn2.addEventListener('click', function() {addToArray(2);changeDisplay(2);});

const btn3 = document.querySelector("#btn3");
btn3.addEventListener('click', function() {addToArray(3);changeDisplay(3);});

const btn4 = document.querySelector("#btn4");
btn4.addEventListener('click', function() {addToArray(4);changeDisplay(4);});

const btn5 = document.querySelector("#btn5");
btn5.addEventListener('click', function() {addToArray(5);changeDisplay(5);});

const btn6 = document.querySelector("#btn6");
btn6.addEventListener('click', function() {addToArray(6);changeDisplay(6);});

const btn7 = document.querySelector("#btn7");
btn7.addEventListener('click', function() {addToArray(7);changeDisplay(7);});

const btn8 = document.querySelector("#btn8");
btn8.addEventListener('click', function() {addToArray(8);changeDisplay(8);});

const btn9 = document.querySelector("#btn9");
btn9.addEventListener('click', function() {addToArray(9);changeDisplay(9);});

const btn0 = document.querySelector("#btn0");
btn0.addEventListener('click', function() {addToArray(0);changeDisplay(0);});

const Equal = document.querySelector("#Equal");
Equal.addEventListener('click', function() {addToArray("=");changeDisplay("=");suffleArray("=")});

const clear = document.querySelector("#clear");
clear.addEventListener('click', function() {clearArray();clearDisplay();});

const Subtract = document.querySelector("#Subtract");
Subtract.addEventListener('click', function() {addToArray("-");changeDisplay("-");suffleArray("-")});

const Add = document.querySelector("#Add");
Add.addEventListener('click', function() {addToArray("+");changeDisplay("+");suffleArray("+")});

const Divide = document.querySelector("#Divide");
Divide.addEventListener('click', function() {addToArray("/");changeDisplay("/");suffleArray("/")});

const Multiply = document.querySelector("#Multiply");
Multiply.addEventListener('click', function() {addToArray("x");changeDisplay("x");suffleArray("x")});

