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

let cilindrajes = [];
let precios = [];
let disponibilidad = [];
let mayorCilindraje = 0;
let menorCilindraje = 0;
let masCara = 0;
let masBarata = 0;
let mayorDisponibles = 0;

for (let i of dataBase.data) {
	// console.log(i);
	cilindrajes.push(parseInt(i.cilindraje));
	precios.push(parseInt(i.precio));
	disponibilidad.push(parseInt(i.disponibles));
}

dataBase.data.forEach(function (elemento, indice) {
	console.log(`Moto ${indice + 1} : ${elemento.cilindraje}`);
});

//! sort()
// let orden = cilindrajes.sort();
// console.log(orden);
// let valorUno = orden[0];
// let valorFinal = orden[orden.length - 1];
// console.log('Valor Inicial :', valorUno);
// console.log('Valor Final :', valorFinal);

// //! Math()
mayorCilindraje = Math.max(...cilindrajes);
menorCilindraje = Math.min(...cilindrajes);
console.log('Mayor cilindraje :', mayorCilindraje);
console.log('Menor cilindraje :', menorCilindraje);

masCara = Math.max(...precios);
masBarata = Math.min(...precios);
console.log('Mas cara :', masCara);
console.log('Mas barata :', masBarata);

mayorDisponibles = Math.max(...disponibilidad);
console.log('Mayor disponibilidad :', mayorDisponibles);

console.log('Array Actual', dataBase.data);

nuevoArray = {
	marca: 'FZ-16',
	modelo: '2022',
	cilindraje: '149',
	precio: '7889000',
	disponibles: '50',
};

dataBase.data.push(nuevoArray);
console.log('Array Modificado', dataBase.data);
