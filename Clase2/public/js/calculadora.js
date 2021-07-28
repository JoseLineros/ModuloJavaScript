/* Calculadora */
let resultadoOperacion = document.getElementById('resultado');

function isFull(num1, num2) {
	if (num1 === '' || num2 === '') {
		alert('Por favor llene todos los campos');
		return false;
	} else {
		return true;
	}
}

function suma() {
	let numero1 = document.getElementById('numero1').value;
	let numero2 = document.getElementById('numero2').value;
	let verify = isFull(numero1, numero2);
	let numero1Convertido = parseInt(numero1);
	let numero2Convertido = parseInt(numero2);
	if (verify) {
		let resultado = numero1Convertido + numero2Convertido;
		resultadoOperacion.innerHTML = `<h5>La suma es : <span class="text-danger">${resultado}</span></h5>`;
	}
}

function resta() {
	let numero1 = document.getElementById('numero1').value;
	let numero2 = document.getElementById('numero2').value;
	let verify = isFull(numero1, numero2);
	let numero1Convertido = parseInt(numero1);
	let numero2Convertido = parseInt(numero2);
	if (verify) {
		let resultado = numero1Convertido - numero2Convertido;
		resultadoOperacion.innerHTML = `<h5>La resta es : <span class="text-danger">${resultado}</span></h5>`;
	}
}

function multiplicacion() {
	let numero1 = document.getElementById('numero1').value;
	let numero2 = document.getElementById('numero2').value;
	let verify = isFull(numero1, numero2);
	let numero1Convertido = parseInt(numero1);
	let numero2Convertido = parseInt(numero2);
	if (verify) {
		let resultado = numero1Convertido * numero2Convertido;
		resultadoOperacion.innerHTML = `<h5>La multiplicacion es : <span class="text-danger">${resultado}</span></h4>`;
	}
}

function division() {
	let numero1 = document.getElementById('numero1').value;
	let numero2 = document.getElementById('numero2').value;
	let verify = isFull(numero1, numero2);
	let numero1Convertido = parseInt(numero1);
	let numero2Convertido = parseInt(numero2);
	if (verify) {
		let resultado = numero1Convertido / numero2Convertido;
		let error = 'No se puede dividir entre 0';

		if (numero1Convertido == 0 && numero2Convertido == 0) {
			resultadoOperacion.innerHTML = `<h5>La division es : <span class="text-danger">0</span></h5>`;
			return;
		}
		if (resultado == Infinity) {
			alert('No se puede dividir por cero');
			resultadoOperacion.innerHTML = `<h5><span class="text-danger">${error}</span></h5>`;
			return;
		}
		resultadoOperacion.innerHTML = `<h5>La division es : <span class="text-danger">${resultado}</span></h5>`;

		// ${resultado === Infinity ? error : resultado}
	}
}
