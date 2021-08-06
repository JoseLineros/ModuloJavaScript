/* Iteradores */

//* Temperatura
let tempAgua = 13;

// for (tempAgua; tempAgua <= 100; tempAgua++) {
// 	console.log('Temperatura = ' + tempAgua);
// }

/* While */
console.log('%c La temperatura del agua! ', 'background: #222; color: #bada55');
while (tempAgua <= 100) {
	console.log(tempAgua);
	tempAgua++;
}
console.log('%c El agua esta lista! ', 'background: #000; color: #fff');

//* Numeros pares de un array
let array = [
	2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 12, 45, 78, 89, 45, 56, 9, 45, 4, 1, 485,
	154, 8, 1,
];
console.log('%c Numeros del array! ', 'background: #222; color: #bada55');
console.log(array);
// console.log(array.length, array[23]);
for (let pos = 0; pos < array.length; pos++) {
	if (array[pos] % 2 !== 0) {
		console.log(array[pos]);
	}
}
// Otra manera
// for (let pos in array) {
// 	if (array[pos] % 2 !== 0) {
// 		console.log(array[pos]);
// 	}
// }

//* De dos en dos hasta cien
console.log('%c Numeros de 2 en 2! ', 'background: #222; color: #bada55');
let numeros = document.getElementById('numeros');
for (let i = 0; i <= 100; i += 2) {
	numeros.innerHTML += `${i}-`;
	console.log(i);
}

//* Numero del 0 al 99 - 01
let numerosCondicion = document.getElementById('numerosCondicion');
let valores = '';
for (let j = 0; j <= 99; j++) {
	if (j < 10) {
		valores += `0${j}, `;
	} else if (j == 99) {
		valores += `${j}`;
	} else {
		valores += `${j}, `;
	}
}
numerosCondicion.innerHTML += valores;
// console.log('tipo', typeof valores);
console.log(
	'%c Numero de 0 al 99 quitando la coma del final! ',
	'background: #222; color: #bada55'
);
console.log(valores);



/* Do while */
