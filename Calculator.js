
//takes 2 numbers and adds them
function add (a,b) {
	let solution = parseInt(a) + parseInt(b);
	solution = Math.round(solution * 100) / 100;
	return (solution);
}

//takes 2 numbers and subtracts them
function subtract (a,b) {
	let solution = parseInt(a) - parseInt(b);
	solution = Math.round(solution * 100) / 100;
	return (solution);
}

//takes 2 numbers and mulitplies them
function multiply1 (a,b) {
	let solution = a * b;
	solution = Math.round(solution * 100) / 100;
	return (solution);
}

//takes 2 numbers and divides them
function divide (a,b) {
	let solution = a / b;
	solution = Math.round(solution * 100) / 100;
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
//(displays the operators and numbers to be operated on)
let displayScreen = document.querySelector("#Display");
let initialDisplay = 0;
displayScreen.textContent = initialDisplay;

//querySelector for the display of the calculator (displays the answer)
let displayScreen2 = document.querySelector("#Display2");
let initialDisplay2 = ""

//changes the display when a button is pushed
function changeDisplay(button) {
	console.log(typeof(button));

	//This is the case where a number is displayed on the screen and the user
	//enters in a second number. Both numbers are treated as strings and added together
	//to form a larger number on the display
	if ((displayScreen.textContent !== "0" && displayScreen.textContent !== "x" 
	&& displayScreen.textContent !== "="
	&& displayScreen.textContent !== "-" && displayScreen.textContent !== "+"
	&& displayScreen.textContent !== "/" ) && (typeof(button) === 'number' || button === ".")) {
		displayScreen.textContent += button;

	//This is the case where the user enters an operator and
	//there are already 2 numbers and an operator stored in the array.
	//This executes the operate function which solves the math problem
	//and displayed the result on the answer screen.
	//the last button the user pressed is displayed on the primary screen. 
	} else if ((button === "x" || button === "=" || button === "/" 
	|| button === "+" || button === "-") && (currentInputs[1] === "x" || 
	currentInputs[1] === "=" || currentInputs[1] === "-" 
	|| currentInputs[1] === "/" || currentInputs[1] === "+") && (currentInputs.length >= 3)) {
		displayScreen2.textContent = operate(currentInputs[0],currentInputs[2],currentInputs[1]);
		console.log(operate(currentInputs[0],currentInputs[2],currentInputs[1]));
		displayScreen.textContent = button;

	//In this case, the user enters an operator and the operator is displayed on the 
	//main screen. 
	} else if (typeof(button) !== 'number') {
		displayScreen.textContent = button;

	//In this case, the user enters a number and the previous value entered was an operator
	//the number is displayed on the main screen. 
	} else {
		displayScreen.textContent = button;
	}
}

//clears the display so its back to its intial value
function clearDisplay(button) {
	displayScreen.textContent = initialDisplay;
	displayScreen2.textContent = initialDisplay2;
}

//creates a empty array to store values in to operate on
let currentInputs = [0];

//store inputs into the curentInputs array
function addToArray(input) {
	console.log(input);
	console.log(typeof(input));
	console.log(displayScreen.textContent);

	//when a user types in a number and the last value typed in was not a operator 
	//(i.e. it was a number)
	//the number the user typed in is treated as a string and added 
	//to the last value typed in (a number)
	//which is also treated as a string
	//this forms a number with multiple digits and adds it to the array in place of the last value
	//of the array 
	if ((typeof input == 'number' || input == "." ) && (displayScreen.textContent !== "x" 
	&& displayScreen.textContent !== "=" && 
	displayScreen.textContent !== "-" && displayScreen.textContent !== "+"
	&& displayScreen.textContent !== "/" )) {
		currentInputs[currentInputs.length - 1] = displayScreen.textContent + input;
		console.log(currentInputs);
		console.log("maybe");

	//After a user has entered the "="" key and is shown a solution to the math problem
	//If the user enters a number, I am assuming that they want to start a new 
	//calculation, so the array is cleared and then the new number is added as
	//the first value in the array
	} else if (typeof input == 'number' && displayScreen.textContent == "=") {
		clearArray();
		currentInputs[0] = input;

	//When the user enters an operator and the last value they entered was an operator as well
	//I am assuming that the user wants to undo the previous operator and 
	//replace it with the one they just entered
	//the new operator takes the place of the old one in the array
	} else if ((input === "x" || input === "=" || input === "/" 
	|| input === "+" || input === "-") && (currentInputs[currentInputs.length - 1] === "x" || 
	currentInputs[currentInputs.length - 1] === "=" || currentInputs[currentInputs.length - 1] === "-" 
	|| currentInputs[currentInputs.length - 1] === "/" || currentInputs[currentInputs.length - 1] === "+")) {
		currentInputs[currentInputs.length - 1] = input;
		console.log("after the =");


	//In all other cases (if a user enters a number after entering an operator or
	//enters an operator after entering a number), the new value that the user has entered
	//is appended to the end of the array
	} else {
		if (typeof input == 'number') {
			currentInputs.push(input.toString());
			console.log(currentInputs);
			console.log("this is a number");
		} else {
		currentInputs.push(input);
		console.log(currentInputs);
		console.log("want");
		}
	}
}

//executes after 2 numbers have been evaluated and the user inputs
//another operator to start a new problem (besides the "=" operator)
//puts the solution to the previous math problem in the first slot of the currentInputs array
//puts the operator the user just entered into the second slot
//and deletes the 3rd and 4th slots, effectivley starting a fresh array
function suffleArray(input) {
	if ((input === "x" || input === "/" 
	|| input === "+" || input === "-") && (currentInputs[1] === "x" || 
	currentInputs[1] === "=" || currentInputs[1] === "-" 
	|| currentInputs[1] === "/" || currentInputs[1] === "+") && (currentInputs.length >= 3)) {
		currentInputs[0] = displayScreen2.textContent;
		currentInputs[1] = currentInputs[3];
		currentInputs.splice(2);
		currentInputs.splice(3);
		console.log("shuffle");
		console.log(currentInputs); 
	}
}


//clears the array back to only containing 0
function clearArray() {
	currentInputs = [0];
	console.log(currentInputs);
}

//Returns true if their is a decimal in the current slot of array
function findDecimal() {
	if(currentInputs[currentInputs.length - 1].includes(".")) {
		return true;
	} else {
		return false;
	}
}

// A function that disables the Decimal button
function disableDecimalButton() {
	document.getElementById("Decimal").disabled = true;
  }

// A function that activates the Decimal button
function activateDecimalButton() {
	document.getElementById("Decimal").disabled = false;
  }

//turns the decimal button on or off depending 
//on how many decimals are in current array slot
function checkDecimal() {
	if (findDecimal()) {
		disableDecimalButton();
	} else {
		activateDecimalButton();
	}
}

//removes the last character the user added to the array
//removes the last character the user added to the display screen
function backSpace() {
	let newString = currentInputs[currentInputs.length - 1].substring(0,currentInputs[currentInputs.length - 1].length - 1);
	currentInputs[currentInputs.length - 1] = newString;
	console.log(currentInputs);
	let newDisplay = displayScreen.textContent.substring(0,displayScreen.textContent.length - 1);
	displayScreen.textContent = newDisplay;
	if (currentInputs[currentInputs.length - 1] == "") {
		currentInputs.pop();
		console.log("pop");
		console.log(currentInputs);
	}

}

//for the case where a user has execuated a operator by clicking the "=" sign
//then types in a number
//the decides to delete that number, and perform 
//an operation on the answer from the previous problem
function fixEmptyString() {
	if (currentInputs.length == 0 || currentInputs[0] == "") {
		currentInputs[0] = displayScreen2.textContent;
	}
	console.log("fix)");
}

//add event listeners that change the display on the calculator 
//for each virtual button on the screen
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

const Decimal = document.querySelector("#Decimal");
Decimal.addEventListener('click', function() {addToArray(".");changeDisplay(".");checkDecimal();});

const Equal = document.querySelector("#Equal");
Equal.addEventListener('click', function() {addToArray("=");changeDisplay("=");suffleArray("=")});

const clear = document.querySelector("#clear");
clear.addEventListener('click', function() {clearArray();clearDisplay();});

const Subtract = document.querySelector("#Subtract");
Subtract.addEventListener('click', function() {addToArray("-");changeDisplay("-");suffleArray("-");checkDecimal();});

const Add = document.querySelector("#Add");
Add.addEventListener('click', function() {addToArray("+");changeDisplay("+");suffleArray("+");checkDecimal();});

const Divide = document.querySelector("#Divide");
Divide.addEventListener('click', function() {addToArray("/");changeDisplay("/");suffleArray("/");checkDecimal();});

const Multiply = document.querySelector("#Multiply");
Multiply.addEventListener('click', function() {addToArray("x");changeDisplay("x");suffleArray("x");checkDecimal();});

const Backspace = document.querySelector("#Backspace");
Backspace.addEventListener('click', function() {backSpace();fixEmptyString();});

