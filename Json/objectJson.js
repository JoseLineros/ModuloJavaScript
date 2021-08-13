let json = {
	llave: 'texto',
	llave2: 2,
	llave3: [],
	llave4: {},
	llave5: true ? true : false,
};
//estudiante
let studentClaseMichael = {
	nombre: 'Natalia',
	apellido: 'Reyes',
	edad: '27',
	sexo: 'Femenino',
};
for (let key in studentClaseMichael) {
	console.log(
		`Estoy en la llave ${key} y tengo un valor ${studentClaseMichael[key]}`
	);
	//objeto[su-llave] = valor que este almacenado en la respectiva llave
}
console.log('impresion normal', studentClaseMichael.nombre);
//objeto.su-llave = valor que este almacenado en la respectiva llave
