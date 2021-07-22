// let diaSemana = 'sabado';
let btnSemana = document
	.getElementById('btnSemana')
	.addEventListener('click', semana);

function semana() {
	let diaSemana = prompt('Escriba el dia de la semana');
	diaSemana = diaSemana.toLowerCase();
	let mensajes = document.getElementById('mensajes');

	if (diaSemana === 'lunes') {
		let mensaje = 'Odio los lunes';
		console.log(mensaje);
		alert(mensaje);
		mensajes.innerHTML = mensaje;
	} else if (diaSemana === 'viernes') {
		let mensaje = 'Amo los viernes';
		console.log(mensaje);
		alert(mensaje);
		mensajes.innerHTML = mensaje;
	} else if (diaSemana === 'sabado' || diaSemana === 'domingo') {
		let mensaje = 'Me encanta descansar';
		console.log(mensaje);
		alert(mensaje);
		mensajes.innerHTML = mensaje;
	} else {
		let mensaje = 'Es un dia normal o no es un dia de la semana';
		console.log(mensaje);
		alert(mensaje);
	}
}
