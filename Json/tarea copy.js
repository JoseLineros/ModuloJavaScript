/* 1. De la siguiente base de datos el estudiante debera devolver los elemntos por consola
     que cumplan con las siguientes caracteristicas

        1. La Moto que posee el mayor ciliondraje
        2. la moto con el menor cilindraje
        2. La moto mas cara
        3. la moto mas barata
        4. la moto con mayor disponibilidad

   2. (Avanzado) un elemnto dentro del codigo que agregue a la lista una nueva moto con los
      mismas llaves, si el objeto nuevo lleva una llave adicional, este no debe permitirle ingresar 
      ingresar el objeto dentro del array    

*/

let dataBase = {
	message: 'Base de datos vehiculos',
	data: [
		{
			marca: 'Apcahe 310RR',
			modelo: '2022',
			cilindraje: '312',
			precio: '22000000',
			disponibles: '8',
		},
		{
			marca: 'YZR-F R6',
			modelo: '2021',
			cilindraje: '598',
			precio: '52568000',
			disponibles: '4',
		},
		{
			marca: 'KTM DUKE 390 NG',
			modelo: '2020',
			cilindraje: '389',
			precio: '21000000',
			disponibles: '14',
		},
		{
			marca: 'YZR-F R1M',
			modelo: '2017',
			cilindraje: '998',
			precio: '64000000',
			disponibles: '3',
		},
	],
};

// console.log(`Marca : ${dataBase.data[0].marca}`);
// console.log(JSON.stringify(dataBase.data[0]));

// for (let i in dataBase.data) {
// 	console.log(dataBase.data[i].marca);
// }

//  1. La Moto que posee el mayor cilindraje
const punto1 = (dataBase) => {
	let datos = dataBase.data;
	let mayorcc = 0; // Cilindraje moto
	let moto = 0; // Info Moto - Posicion que ocupa en el arreglo

	for (let i in datos) {
		console.log(datos[i]);
		let cc = parseInt(datos[i].cilindraje);
		if (cc > mayorcc) {
			mayorcc = cc; // Temporal que guarda el mayor cilindraje encontrado
			// moto = i;
			moto = datos[i]; // guarda info de la moto
		}
	}
	return moto;
	// console.log(datos[moto]);
};

const puntoAvanzado = (nuevoObj) => {
	let bandera = true; // Si la bandera es false un llave se llama diferente

	for (let key in nuevoObj) {
		console.log(key);

		if (
			key === 'marca' ||
			key === 'modelo' ||
			key === 'cilindraje' ||
			key === 'precio' ||
			key === 'disponibles'
		) {
			bandera = true;
		} else {
			bandera = false;
		}
	}

	if (bandera) {
		dataBase.data.push(nuevoObj);
	} else {
		console.log('Clave no disponible');
	}

	// return dataBase;
};

let nuevoObj = {
	marca: 'MT-07',
	modelo: '2021',
	cilindraje: '689',
	precio: '40.950.000',
	disponibles: '8',
};

//Ejecucion de funciones
console.log(punto1(dataBase));
console.log(puntoAvanzado(nuevoObj));
