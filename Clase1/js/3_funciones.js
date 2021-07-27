// let numero1 = prompt('Escriba el numero 1');
// let numero2 = prompt('Escriba el numero 2');
// let operacion = prompt('Escriba la operacion a realizar');
// operacion = operacion.toLowerCase();
// let num1 = parseInt(numero1);
// let num2 = parseInt(numero2);

// let inputNumero1 = document.getElementById('numero1').value;
// let numero1 = parseInt(inputNumero1);
// let inputNumero2 = document.getElementById('numero2').value;
// let numero2 = parseInt(inputNumero2);

let btnSumar = document.getElementById('sumar');
btnSumar.addEventListener('click', opSumar);
let btnRestar = document.getElementById('restar');
btnRestar.addEventListener('click', opRestar);
let btnMultiplicar = document.getElementById('multiplicar');
btnMultiplicar.addEventListener('click', opMultiplicar);
let btnDividir = document.getElementById('dividir');
btnDividir.addEventListener('click', opDividir);

let resultadoOperacion = document.getElementById('resultadoOperacion');

function opSumar(num1, num2) {
	let inputNumero1 = document.getElementById('numero1').value;
	let inputNumero2 = document.getElementById('numero2').value;
	let numero1 = parseInt(inputNumero1);
	let numero2 = parseInt(inputNumero2);
	let resultado = numero1 + numero2;
	resultadoOperacion.innerHTML = `La suma es : ${resultado}`;
}

function opRestar(num1, num2) {
	let inputNumero1 = document.getElementById('numero1').value;
	let inputNumero2 = document.getElementById('numero2').value;
	let numero1 = parseInt(inputNumero1);
	let numero2 = parseInt(inputNumero2);
	let resultado = numero1 - numero2;
	resultadoOperacion.innerHTML = `La resta es : ${resultado}`;
}

function opMultiplicar(num1, num2) {
	let inputNumero1 = document.getElementById('numero1').value;
	let inputNumero2 = document.getElementById('numero2').value;
	let numero1 = parseInt(inputNumero1);
	let numero2 = parseInt(inputNumero2);
	let resultado = numero1 * numero2;
	resultadoOperacion.innerHTML = `La multiplicacion es : ${resultado}`;
}

function opDividir(num1, num2) {
	let inputNumero1 = document.getElementById('numero1').value;
	let inputNumero2 = document.getElementById('numero2').value;
	let numero1 = parseInt(inputNumero1);
	let numero2 = parseInt(inputNumero2);
	let resultado = numero1 / numero2;
	resultadoOperacion.innerHTML = `La division es : ${resultado}`;
}

function unirNombres(nombres, apellidos) {
	let nombreCompleto = `${nombres} ${apellidos}`;
	console.log(nombreCompleto);
}

unirNombres('Jose', 'Lineros');
