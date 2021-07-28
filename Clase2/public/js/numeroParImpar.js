let showNumberParImpar = document.getElementById('showNumberParImpar');
let resultado = null;

let btnParImpar = document
	.getElementById('btnParImpar')
	.addEventListener('click', numeroParImpar);

let enterParImpar = document
	.getElementById('numeroParImpar')
	.addEventListener('keydown', comprobar(e));

function comprobar(e) {
	if (e.keyCode === 13) {
		numeroParImpar();
	}
}

function numeroParImpar() {
	let numeroParImpar = document.getElementById('numeroParImpar').value;
	let numeroConvertido = parseInt(numeroParImpar);
	if (numeroParImpar === '' || numeroParImpar === NaN) {
		alert('Ingrese un numero');
		return;
	}

	if (numeroConvertido % 2 == 0) {
		console.log('El numero es par');
		resultado = 'Par';
	}
	if (numeroConvertido % 2 != 0) {
		console.log('El numero es Impar');
		resultado = 'Impar';
	}
	showNumberParImpar.innerHTML = `<h5>El numero es : <span class="text-danger">${resultado}</span>`;
}
