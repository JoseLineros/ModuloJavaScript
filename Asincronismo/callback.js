function saludar(nombre) {
	console.log('Hola ' + nombre);
}

function procesarEntrada(callback) {
	setTimeout(function () {
		console.log('Por favor ingrese tu nombre');
		callback('Jose');
	}, 2000);
}

procesarEntrada(saludar);
