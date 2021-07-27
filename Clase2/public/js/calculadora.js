/* Calculadora */
let resultadoOperacion = document.getElementById('resultado');

function isFull() {
	let numero1 = document.getElementById('numero1').value;
	let numero2 = document.getElementById('numero2').value;
	if (numero1 === '' || numero2 === '') {
		alert('Por favor llene todos los campos');
		return false;
	} else {
		return true;
	}
}

function suma() {
	let numero1 = document.getElementById('numero1').value;
	let numero2 = document.getElementById('numero2').value;
	let numero1Convertido = parseInt(numero1);
	let numero2Convertido = parseInt(numero2);
	let verify = isFull();
	if (verify === true) {
		let resultado = numero1Convertido + numero2Convertido;
		resultadoOperacion.innerHTML = `<h5>La suma es : <span class="text-danger">${resultado}</span></h5>`;
		// console.log(numero1Convertido + numero2Convertido);
	}
}

function resta() {
	let numero1 = document.getElementById('numero1').value;
	let numero2 = document.getElementById('numero2').value;
	let numero1Convertido = parseInt(numero1);
	let numero2Convertido = parseInt(numero2);
	let verify = isFull();
	if (verify === true) {
		let resultado = numero1Convertido - numero2Convertido;
		resultadoOperacion.innerHTML = `<h5>La resta es : <span class="text-danger">${resultado}</span></h5>`;
	}
}

function multiplicacion() {
	let numero1 = document.getElementById('numero1').value;
	let numero2 = document.getElementById('numero2').value;
	let numero1Convertido = parseInt(numero1);
	let numero2Convertido = parseInt(numero2);
	let verify = isFull();
	if (verify === true) {
		let resultado = numero1Convertido * numero2Convertido;
		resultadoOperacion.innerHTML = `<h5>La multiplicacion es : <span class="text-danger">${resultado}</span></h4>`;
	}
}

function division() {
	let numero1 = document.getElementById('numero1').value;
	let numero2 = document.getElementById('numero2').value;
	let numero1Convertido = parseInt(numero1);
	let numero2Convertido = parseInt(numero2);
	let verify = isFull();
	if (verify === true) {
		let resultado = numero1Convertido / numero2Convertido;
		resultadoOperacion.innerHTML = `<h5>La division es : <span class="text-danger">${resultado}</span></h5>`;
	}
}
