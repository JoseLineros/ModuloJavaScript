// let contenido = document.getElementById('toPrint').innerHTML;
// document.getElementById(
// 	'toPrint'
// ).innerHTML += `${contenido} <p>Etiqueta nueva</p>`;
// console.log(contenido);

function toPrint(param1) {
	let contenido = document.getElementById('inputText').value;
	document.getElementById('toPrint').innerHTML = contenido;
	console.log(param1);
}
