/* Funciones */
function info(nombres, apellidos, edad, telefono) {
	console.log(`Nombre : ${nombres}`);
	console.log(`Apellidos : ${apellidos}`);
	console.log(`Edad : ${edad} años`);
	console.log(`Telefono : ${telefono}`);

	// console.log(
	// 	`
	//     \nNombre : ${nombres}
	//     \nApellidos : ${apellidos}
	//     \nEdad : ${edad} años
	//     \nTelefono : ${telefono}
	//     `
	// );
}

info('Jose', 'Lineros', 123, 12345678);

/* Mostrar si el numero es positivo o negativo */
function numeroPosNeg(num) {
	if (isNaN(num) === false) {
		if (num > 0) {
			console.log('\nEl numero es positivo');
		} else if (num < 0) {
			console.log('\nEl numero es negativo');
		} else if (num === 0) {
			console.log('\nEl numero es cero');
		}
	} else {
		console.log('\nno es un numero');
	}
}
numeroPosNeg(10);
