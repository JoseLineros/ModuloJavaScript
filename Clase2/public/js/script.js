// let texto = prompt('Escriba el texto');
// console.log(texto);

// let confirmar = confirm('Desea aceptar los terminos');
// console.log(confirmar);

// let alerta = alert('Ha aceptado los terminos');

// if (confirmar) {
// 	alerta;
// }

// function execute(texto) {
// 	alert(`Ejecucion ${texto}`);
// }

/* Basico */
function captura() {
	let contenido = document.getElementById('someText').value;
	aviso(contenido);
}

function aviso(texto) {
	alert(texto);
}

/* Con prompt */
// let nombrePrompt = prompt('Cual su nombre ?');
// let apellidosPrompt = prompt('Cuales son sus apellidos ?');
// let nombreCompleto = `${nombrePrompt} ${apellidosPrompt}`;
// if (nombrePrompt == '') {
// 	nombrePrompt = 'Sin nombre';
// 	nombreCompleto = `${nombrePrompt} ${apellidosPrompt}`;
// }
// if (apellidosPrompt == '') {
// 	apellidosPrompt = 'Sin apellidos';
// 	nombreCompleto = `${nombrePrompt} ${apellidosPrompt}`;
// }
// alert(`Hola ${nombreCompleto}`);

/* con input */
let nombreUsuario = document.getElementById('nombreUsuario');

let btnSaludar = document
	.getElementById('btnSaludar')
	.addEventListener('click', saludarUsuario);

function saludarUsuario() {
	let inputNombre = document.getElementById('nombre').value;
	let inputApellido = document.getElementById('apellido').value;
	saludar(inputNombre, inputApellido);
}

function saludar(nombre, apellido) {
	let nombreCompleto = `${nombre} ${apellido}`;
	alert(`Bienvenido ${nombreCompleto}`);
	nombreUsuario = nombreUsuario.innerHTML = `Bienvenido ${nombreCompleto}`;
}
