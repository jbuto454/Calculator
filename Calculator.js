function add (a,b) {
	let solution = a + b;
	return (solution);
}

function subtract (a,b) {
	let solution = a - b;
	return (solution);
}

function multiply1 (a,b) {
	let solution = a * b;
	return (solution);
}

function divide (a,b) {
	let solution = a / b;
	return (solution);
}

function sum (array) {
	let solution = array.reduce(function(a,b) {
		return a + b;
	}, 0);
return (solution);
}

function multiply (array) {
	let solution = array.reduce(function(a,b) {
		return a*b;
	}, 1);
return (solution);
}

function power(a,b) {
		return a**b;
	}


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